import { type Client, registerClientModule } from "../core/client";
import { paginate } from "../core/pagination";
import { toQueryOptions } from "../core/query";
import { assertNonBlankString, isUndefined } from "../core/utils";
import { type Author, type Comment } from "../types/feed";
import {
	type CommentsListOptions,
	type Pager,
	type RequestOptions,
} from "../types/options";

/** An {@link Author} plus how many of the scanned comments are theirs. */
export interface CommenterWithCount extends Author {
	totalComments: number;
}

/** Methods for listing and fetching comments. */
export class CommentsModule {
	constructor(private readonly client: Client) {}

	/** Lists comments for the whole blog, or for a single post when `options.postId` is set. */
	async list(
		options: CommentsListOptions = {},
		requestOptions: RequestOptions = {},
	): Promise<Pager<Comment>> {
		const { postId } = options;
		if (!isUndefined(postId)) assertNonBlankString(postId, "options.postId");

		const path = `./${postId ? `${encodeURIComponent(postId)}/` : ""}comments/${
			options.summary ? "summary" : "default"
		}`;

		const feed = await this.client.req(path, {
			params: toQueryOptions(options),
			signal: requestOptions.signal,
		});

		let comments = feed.comments ?? [];
		if (postId) comments = comments.filter((c) => c.post.id === postId);

		return paginate(this.client, feed, comments);
	}

	/**
	 * Fetches a single comment by id.
	 *
	 * Passing `postId` performs one direct request. Without it, this scans
	 * the blog-level comments feed (in pages of `scanPageSize`, up to
	 * `maxScan` comments) since Blogger's feed API has no id-only comment
	 * lookup — prefer passing `postId` when you have it.
	 */
	async get(
		commentId: string,
		postId?: string,
		options: { maxScan?: number; scanPageSize?: number } = {},
		requestOptions: RequestOptions = {},
	): Promise<Comment | null> {
		assertNonBlankString(commentId, "commentId");

		if (postId) {
			assertNonBlankString(postId, "postId");
			const feed = await this.client.req(
				`./${encodeURIComponent(postId)}/comments/default/${encodeURIComponent(commentId)}`,
				{
					base: await this.client.getServiceBase(),
					signal: requestOptions.signal,
				},
			);
			return (
				feed.comments?.find((c) => c.id === commentId) ??
				feed.comments?.[0] ??
				null
			);
		}

		const scanPageSize = options.scanPageSize ?? 100;
		const maxScan = options.maxScan ?? 500;

		let startIndex = 1;
		while (startIndex <= maxScan) {
			const page = await this.list(
				{ startIndex, limit: scanPageSize },
				{ signal: requestOptions.signal },
			);
			const found = page.items.find((c) => c.id === commentId);
			if (found) return found;
			if (!page.hasNext || page.items.length === 0) break;
			startIndex += scanPageSize;
		}

		return null;
	}

	/**
	 * Lists distinct commenters, each with their comment count.
	 *
	 * By default (no `sampleSize`) `max-results` is not sent on the
	 * request, and every page is walked via pagination until exhausted —
	 * so every comment on the blog gets counted. Pass `sampleSize` to cap
	 * the scan to a single request of that many most-recent comments
	 * instead. Pass `postId` to scope to one post's commenters.
	 */
	async commenters(
		options: { postId?: string; sampleSize?: number } = {},
		requestOptions: RequestOptions = {},
	): Promise<CommenterWithCount[]> {
		const counts = new Map<string, { author: Author; totalComments: number }>();

		let page = await this.list(
			{ postId: options.postId, limit: options.sampleSize ?? null },
			requestOptions,
		);

		while (true) {
			for (const comment of page.items) {
				const key = comment.author.url ?? comment.author.name ?? "unknown";
				const existing = counts.get(key);
				if (existing) {
					existing.totalComments += 1;
				} else {
					counts.set(key, { author: comment.author, totalComments: 1 });
				}
			}

			if (options.sampleSize !== undefined) break;

			const next = await page.next(requestOptions);
			if (!next) break;
			page = next;
		}

		return [...counts.values()].map(({ author, totalComments }) => ({
			...author,
			totalComments,
		}));
	}
}

declare module "../core/client" {
	interface Client {
		/** Lazily-created {@link CommentsModule} for this client. */
		readonly comments: CommentsModule;
	}
}

registerClientModule<CommentsModule>(
	"comments",
	(client) => new CommentsModule(client),
);
