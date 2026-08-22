[**blogr**](../README.md)

***

[blogr](../README.md) / LatestOptions

# Type Alias: LatestOptions

> **LatestOptions** = `number` \| `Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"orderBy"` \| `"startIndex"`\>

Defined in: [src/types/options.ts:58](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L58)

Options for [PostsModule.latest](../classes/PostsModule.md#latest). A bare
`number` is shorthand for `{ limit: number }`; pass an object instead to
also filter by `label`, `query`, date range, etc.
