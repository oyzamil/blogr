import { registerClientModule } from "../core/client";
import { extractImages } from "../parser/html";
import { type RequestOptions } from "../types/options";
import { PostsModule } from "./posts";

/** One image found while scanning posts. */
export interface FoundImage {
	/** The image's own URL. */
	url: string;
	/** Id of the post it was found in. */
	postId: string;
	/** URL of the post it was found in. */
	postUrl: string;
}

/** Aggregate image discovery across posts. */
export class ImagesModule {
	constructor(private readonly posts: PostsModule) {}

	/**
	 * Returns every unique image found in post content, each tagged with
	 * the post it came from.
	 *
	 * By default (no `sampleSize`) `max-results` is not sent on the request
	 * at all, and every page is walked via pagination until exhausted — so
	 * every post in the blog gets scanned. Pass `sampleSize` to cap the
	 * scan to a single request of that many most-recent posts instead.
	 */
	async list(
		options: { sampleSize?: number } = {},
		requestOptions: RequestOptions = {},
	): Promise<FoundImage[]> {
		const seen = new Set<string>();
		const found: FoundImage[] = [];

		let page = await this.posts.list(
			{ limit: options.sampleSize ?? null },
			requestOptions,
		);

		while (true) {
			for (const post of page.items) {
				for (const url of extractImages(post)) {
					if (seen.has(url)) continue;
					seen.add(url);
					found.push({ url, postId: post.id, postUrl: post.url });
				}
			}

			if (options.sampleSize !== undefined) break;

			const next = await page.next(requestOptions);
			if (!next) break;
			page = next;
		}

		return found;
	}
}

declare module "../core/client" {
	interface Client {
		/** Lazily-created {@link ImagesModule} for this client. */
		readonly images: ImagesModule;
	}
}

registerClientModule<ImagesModule>(
	"images",
	(client) => new ImagesModule(new PostsModule(client)),
);
