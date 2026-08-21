import { readFileSync } from "node:fs";
import { type OutputOptions } from "rolldown";
import { defineConfig, type UserConfig } from "tsdown";

const pkg = JSON.parse(
	readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);

const BANNER = (format: string) =>
	`/*! ${pkg.name} v${pkg.version} - ${format} | M.Muzammil <https://muzammil.work/> | MIT License */`;

const applyOutputOptions = (
	options: OutputOptions,
	format: string,
	isLibrary = false,
) => {
	options.banner = BANNER(format);

	options.comments = {
		legal: true,
	};

	if (isLibrary) {
		options.exports = "named";
	}

	return options;
};

const shared: UserConfig = {
	sourcemap: false,
	target: "es2020",
};

const MODULE_ENTRIES: Record<string, string> = {
	posts: "src/modules/posts.ts",
	pages: "src/modules/pages.ts",
	comments: "src/modules/comments.ts",
	labels: "src/modules/labels.ts",
	search: "src/modules/search.ts",
	authors: "src/modules/authors.ts",
	stats: "src/modules/stats.ts",
	images: "src/modules/images.ts",
	archive: "src/modules/archive.ts",
	feed: "src/modules/feed.ts",
	url: "src/modules/url.ts",
	client: "src/core/client.ts",
};

const packageBuild = (minify: boolean): UserConfig => ({
	...shared,
	entry: {
		[pkg.name]: "src/index.ts",
		// Separate per-module entries so `import { PostsModule } from
		// "blogr/posts"` only pulls in posts + shared core — rolldown
		// dedupes the shared core/http/cache/utils code all modules import
		// into a common chunk instead of duplicating it, so a "posts"-only
		// consumer never bundles comments/authors/etc.
		...MODULE_ENTRIES,
	},
	format: ["esm", "cjs"],
	dts: !minify,
	clean: !minify,
	minify,
	outputOptions(options, format) {
		applyOutputOptions(options, format, true);

		// Shared internal chunks (utils/pagination/query/etc — code two or
		// more entries import) default to a content hash in the filename
		// (e.g. `utils-CK9HTX3r.esm.js`), which changes every build and is
		// awkward to reference. Give them stable names instead, under
		// `internal/` so a chunk can never collide with a real, importable
		// per-module entry file living at the top of `dist/` (e.g. the
		// standalone `client.esm.js` entry vs. an internal chunk that
		// happens to also be named "client").
		const ext =
			format === "es"
				? minify
					? "esm.min.js"
					: "esm.js"
				: minify
					? "min.cjs"
					: "cjs";
		options.chunkFileNames = `internal/[name].${ext}`;

		return options;
	},
	outExtensions({ format }) {
		return {
			js: minify
				? format === "es"
					? ".esm.min.js"
					: ".min.cjs"
				: format === "es"
					? ".esm.js"
					: ".cjs",
			...(minify
				? {}
				: {
						dts: format === "es" ? ".ts" : ".cts",
					}),
		};
	},
});

const browserBuild = (minify: boolean): UserConfig => ({
	...shared,
	entry: {
		[pkg.name]: "src/browser.ts",
	},
	format: ["iife"],
	globalName: "Blogr",
	dts: false,
	clean: false,
	minify,
	outputOptions(options, format) {
		applyOutputOptions(options, format, false);

		options.entryFileNames = minify ? "[name].min.js" : "[name].js";
		options.exports = "default";

		return options;
	},
});

const CLIENT_MODULE_RE = /[\\/]core[\\/]client(\.ts)?$/;

// Standalone per-module CDN builds — `<script src=".../posts.min.js">`
// alone (after client.js) patches the shared `Blogr` (== `Client`)
// prototype with `.posts`, so `new Blogr(url)` from client.js gets `.posts`
// too. Every one of these except client.js itself treats `../core/client`
// as external, resolved at runtime via the `window.Blogr` global client.js
// already set up — otherwise each standalone bundle would carry its own,
// separately-identitied copy of `Client`, and the prototype patch would
// land on the wrong object (see src/browser/client.ts).
const moduleBrowserBuild = (name: string, minify: boolean): UserConfig => ({
	...shared,
	entry: {
		[name]: `src/browser/${name}.ts`,
	},
	format: ["iife"],
	globalName: `__blogr_${name}_unused`,
	external: name === "client" ? undefined : [CLIENT_MODULE_RE],
	dts: false,
	clean: false,
	minify,
	outputOptions(options, format) {
		applyOutputOptions(options, format, false);

		options.entryFileNames = minify ? "[name].min.js" : "[name].js";
		if (name !== "client") {
			options.globals = (id: string) =>
				CLIENT_MODULE_RE.test(id) ? "__blogrCore" : "";
		}

		return options;
	},
});

export default defineConfig([
	packageBuild(false),
	packageBuild(true),
	browserBuild(false),
	browserBuild(true),
	...Object.keys(MODULE_ENTRIES).flatMap((name) => [
		moduleBrowserBuild(name, false),
		moduleBrowserBuild(name, true),
	]),
]);
