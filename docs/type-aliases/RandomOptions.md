[**blogr**](../README.md)

***

[blogr](../README.md) / RandomOptions

# Type Alias: RandomOptions

> **RandomOptions** = `number` \| `Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"limit"` \| `"startIndex"`\> & `object`

Defined in: [src/types/options.ts:67](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L67)

Options for [PostsModule.random](../classes/PostsModule.md#random). A bare
`number` is shorthand for `{ count: number }`; pass an object instead to
also filter by `label`, `query`, date range, etc.
