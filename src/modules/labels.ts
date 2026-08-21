import { type Client, registerClientModule } from "../core/client";
import { assertNonBlankString } from "../core/utils";
import { type Post } from "../types/feed";
import {
	type Pager,
	type PostsListOptions,
	type RequestOptions,
} from "../types/options";
import { PostsModule } from "./posts";

/** A label plus how many of the scanned posts carry it. */
export interface LabelWithPostCount {
	label: string;
	postCount: number;
}

/** Methods for discovering and filtering by labels (Blogger's "categories"). */
export class LabelsModule {
	constructor(
		private readonly client: Client,
		private readonly posts: PostsModule,
	) {}

	/** Returns every label currently known to the blog. */
	async list(requestOptions: RequestOptions = {}): Promise<string[]> {
		const feed = await this.client.req("./posts/summary", {
			params: { limit: 0 },
			signal: requestOptions.signal,
		});
		return feed.blog?.labels ?? [];
	}

	/**
	 * Returns every label with a post count.
	 *
	 * `list()` alone is one cheap request (Blogger reports the label set
	 * on any feed response, count-free) — this instead scans every post in
	 * the blog to tally how many carry each label, so it costs one request
	 * per page of posts. Pass `sampleSize` to cap the scan to a single
	 * request of that many most-recent posts instead.
	 */
	async counts(
		options: { sampleSize?: number } = {},
		requestOptions: RequestOptions = {},
	): Promise<LabelWithPostCount[]> {
		const tally = new Map<string, number>();

		let page = await this.posts.list(
			{ limit: options.sampleSize ?? null, summary: true },
			requestOptions,
		);

		while (true) {
			for (const post of page.items) {
				for (const label of post.labels) {
					tally.set(label, (tally.get(label) ?? 0) + 1);
				}
			}

			if (options.sampleSize !== undefined) break;

			const next = await page.next(requestOptions);
			if (!next) break;
			page = next;
		}

		return [...tally.entries()].map(([label, postCount]) => ({
			label,
			postCount,
		}));
	}

	/** Lists posts carrying `label`. */
	async get(
		label: string,
		options: Omit<PostsListOptions, "label"> = {},
		requestOptions: RequestOptions = {},
	): Promise<Pager<Post>> {
		assertNonBlankString(label, "label");
		return this.posts.list({ ...options, label }, requestOptions);
	}
}

declare module "../core/client" {
	interface Client {
		/** Lazily-created {@link LabelsModule} for this client. */
		readonly labels: LabelsModule;
	}
}

registerClientModule<LabelsModule>(
	"labels",
	(client) => new LabelsModule(client, new PostsModule(client)),
);
