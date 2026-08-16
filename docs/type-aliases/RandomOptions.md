[**blogr**](../README.md)

***

[blogr](../README.md) / RandomOptions

# Type Alias: RandomOptions

> **RandomOptions** = `number` \| `Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"limit"` \| `"startIndex"`\> & `object`

Defined in: [src/types/options.ts:67](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/types/options.ts#L67)

Options for [PostsModule.random](../classes/PostsModule.md#random). A bare
`number` is shorthand for `{ count: number }`; pass an object instead to
also filter by `label`, `query`, date range, etc.
