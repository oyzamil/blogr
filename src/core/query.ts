import { type BaseListOptions } from "../types/options";
import { DEFAULT_LIMIT } from "./constants";
import { type QueryOptions } from "./http";
import { pageToStartIndex } from "./utils";

/** Translates friendly list options (`page`, `limit`, ...) into raw query params. */
export function toQueryOptions(
	options: BaseListOptions & { query?: string } = {},
): QueryOptions {
	const limit =
		options.limit === null ? undefined : (options.limit ?? DEFAULT_LIMIT);

	let startIndex = options.startIndex;
	if (startIndex === undefined && options.page !== undefined) {
		startIndex = pageToStartIndex(options.page, limit ?? DEFAULT_LIMIT);
	}

	return {
		limit,
		startIndex,
		orderBy: options.orderBy,
		publishedMin: options.publishedMin,
		publishedMax: options.publishedMax,
		updatedMin: options.updatedMin,
		updatedMax: options.updatedMax,
		query: options.query,
	};
}
