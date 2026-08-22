import { registerClientModule } from "../core/client";
import { type Author } from "../types/feed";
import { type RequestOptions } from "../types/options";
import { PostsModule } from "./posts";

/** An {@link Author} plus stats derived from the scanned posts. */
export interface AuthorWithPostCount extends Author {
	/** Number of posts by this author found in the scanned range. */
	totalPosts: number;
	/** Earliest `published` timestamp seen for this author, or `null`. */
	firstPostDate: string | null;
	/** Latest `published` timestamp seen for this author, or `null`. */
	lastPostDate: string | null;
	/** Union of every label/category seen across this author's posts. */
	labels: string[];
}

/**
 * Lists distinct post authors, each with post count and stats derived from
 * their posts.
 *
 * Blogger's feed API has no dedicated authors endpoint, so this aggregates
 * authors seen across the blog's posts.
 *
 * By default (no `sampleSize`) `max-results` is not sent on the request at
 * all, and every page of results is walked via the feed's own pagination
 * until exhausted — so every author across every post is counted, at the
 * cost of one request per page for blogs with a lot of posts. Pass
 * `sampleSize` to instead cap the scan to a single request of that many
 * most-recent posts.
 */
export class AuthorsModule {
	constructor(private readonly posts: PostsModule) {}

	async list(
		options: { sampleSize?: number } = {},
		requestOptions: RequestOptions = {},
	): Promise<AuthorWithPostCount[]> {
		const entries = new Map<
			string,
			{
				author: Author;
				totalPosts: number;
				firstPostDate: string | null;
				lastPostDate: string | null;
				labels: Set<string>;
			}
		>();

		let page = await this.posts.list(
			{ limit: options.sampleSize ?? null, summary: true },
			requestOptions,
		);

		while (true) {
			for (const post of page.items) {
				const key = post.author.url ?? post.author.name ?? "unknown";
				let entry = entries.get(key);
				if (!entry) {
					entry = {
						author: post.author,
						totalPosts: 0,
						firstPostDate: null,
						lastPostDate: null,
						labels: new Set<string>(),
					};
					entries.set(key, entry);
				}

				entry.totalPosts += 1;
				for (const label of post.labels) entry.labels.add(label);

				if (
					entry.firstPostDate === null ||
					post.published < entry.firstPostDate
				) {
					entry.firstPostDate = post.published;
				}
				if (
					entry.lastPostDate === null ||
					post.published > entry.lastPostDate
				) {
					entry.lastPostDate = post.published;
				}
			}

			// sampleSize means "one page, this many posts" — don't follow
			// pagination in that case, only when scanning everything.
			if (options.sampleSize !== undefined) break;

			const next = await page.next(requestOptions);
			if (!next) break;
			page = next;
		}

		return [...entries.values()].map((entry) => ({
			...entry.author,
			totalPosts: entry.totalPosts,
			firstPostDate: entry.firstPostDate,
			lastPostDate: entry.lastPostDate,
			labels: [...entry.labels],
		}));
	}
}

registerClientModule(
	"authors",
	(client) => new AuthorsModule(new PostsModule(client)),
);
