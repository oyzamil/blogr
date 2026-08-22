import { type Client, registerClientModule } from "../core/client";
import { type FeedFormat } from "../core/http";
import { assertNonBlankString } from "../core/utils";

export interface UrlOptions {
	/** @default "json" */
	format?: FeedFormat;
}

/** Builds raw Blogger feed URLs without performing any request. */
export class UrlModule {
	constructor(private readonly client: Client) {}

	/** URL for the posts feed. */
	posts(options: UrlOptions = {}): string {
		return this.client
			.resolveUrl("./posts/default", { format: options.format })
			.toString();
	}

	/** URL for a single post entry. */
	post(postId: string, options: UrlOptions = {}): string {
		assertNonBlankString(postId, "postId");
		return this.client
			.resolveUrl(`./posts/default/${encodeURIComponent(postId)}`, {
				format: options.format,
			})
			.toString();
	}

	/** URL for the pages feed. */
	pages(options: UrlOptions = {}): string {
		return this.client
			.resolveUrl("./pages/default", { format: options.format })
			.toString();
	}

	/** URL for a single page entry. */
	page(pageId: string, options: UrlOptions = {}): string {
		assertNonBlankString(pageId, "pageId");
		return this.client
			.resolveUrl(`./pages/default/${encodeURIComponent(pageId)}`, {
				format: options.format,
			})
			.toString();
	}

	/** URL for the comments feed (blog-wide, or scoped to `postId`). */
	comments(postId?: string, options: UrlOptions = {}): string {
		const path = postId
			? `./${encodeURIComponent(postId)}/comments/default`
			: "./comments/default";
		return this.client.resolveUrl(path, { format: options.format }).toString();
	}

	/** URL for the posts feed filtered to `label` (or several labels). */
	label(label: string | string[], options: UrlOptions = {}): string {
		const labels = Array.isArray(label) ? label : [label];
		const segment = labels.map((l) => encodeURIComponent(l)).join("/");
		return this.client
			.resolveUrl(`./posts/default/-/${segment}`, { format: options.format })
			.toString();
	}

	/** URL for a full-text search against the posts feed. */
	search(query: string, options: UrlOptions = {}): string {
		assertNonBlankString(query, "query");
		return this.client
			.resolveUrl("./posts/default", {
				format: options.format,
				params: { query },
			})
			.toString();
	}
}

registerClientModule("url", (client) => new UrlModule(client));
