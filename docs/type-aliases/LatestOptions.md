[**blogr**](../README.md)

***

[blogr](../README.md) / LatestOptions

# Type Alias: LatestOptions

> **LatestOptions** = `number` \| `Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"orderBy"` \| `"startIndex"`\>

Defined in: [src/types/options.ts:58](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/types/options.ts#L58)

Options for [PostsModule.latest](../classes/PostsModule.md#latest). A bare
`number` is shorthand for `{ limit: number }`; pass an object instead to
also filter by `label`, `query`, date range, etc.
