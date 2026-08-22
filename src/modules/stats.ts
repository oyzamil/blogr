import { type Client, registerClientModule } from "../core/client";
import { type RequestOptions } from "../types/options";

export interface BlogStats {
	posts: number;
	pages: number;
	comments: number;
	labels: number;
	/** Published timestamp of the most recent post, or `null` if the blog has no posts. */
	lastPostDate: string | null;
}

/** Cheap aggregate counts for the blog (posts/pages/comments/labels totals). */
export class StatsModule {
	constructor(private readonly client: Client) {}

	async get(requestOptions: RequestOptions = {}): Promise<BlogStats> {
		const [postsFeed, pagesFeed, commentsFeed] = await Promise.all([
			this.client.req("./posts/summary", {
				// limit:1 instead of limit:0 — still one cheap request, but
				// also hands back the newest post's date for free.
				params: { limit: 1 },
				signal: requestOptions.signal,
			}),
			this.client.req("./pages/summary", {
				params: { limit: 0 },
				signal: requestOptions.signal,
			}),
			this.client.req("./comments/summary", {
				params: { limit: 0 },
				signal: requestOptions.signal,
			}),
		]);

		return {
			posts: postsFeed.totalResults ?? 0,
			pages: pagesFeed.totalResults ?? 0,
			comments: commentsFeed.totalResults ?? 0,
			labels: postsFeed.blog?.labels.length ?? 0,
			lastPostDate: postsFeed.posts?.[0]?.published ?? null,
		};
	}
}

registerClientModule("stats", (client) => new StatsModule(client));
