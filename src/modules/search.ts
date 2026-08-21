import { registerClientModule } from "../core/client";
import { assertNonBlankString, isString } from "../core/utils";
import { type Post } from "../types/feed";
import {
	type Pager,
	type RequestOptions,
	type SearchOptions,
} from "../types/options";
import { PostsModule } from "./posts";

/** Full-text search across posts. */
export class SearchModule {
	constructor(private readonly posts: PostsModule) {}

	/** Searches posts by a plain query string, or a {@link SearchOptions} object. */
	async run(
		input: string | SearchOptions,
		requestOptions: RequestOptions = {},
	): Promise<Pager<Post>> {
		const options: SearchOptions = isString(input) ? { query: input } : input;
		assertNonBlankString(options.query, "query");
		return this.posts.list(
			{
				query: options.query,
				label: options.label,
				limit: options.limit,
				page: options.page,
				startIndex: options.startIndex,
				orderBy: options.orderBy,
				publishedMin: options.publishedMin,
				publishedMax: options.publishedMax,
				updatedMin: options.updatedMin,
				updatedMax: options.updatedMax,
				summary: options.summary,
			},
			requestOptions,
		);
	}
}

declare module "../core/client" {
	interface Client {
		/** Lazily-created {@link SearchModule} for this client. */
		readonly search: SearchModule;
	}
}

registerClientModule<SearchModule>(
	"search",
	(client) => new SearchModule(new PostsModule(client)),
);
