[**blogr**](../README.md)

***

[blogr](../README.md) / BaseListOptions

# Interface: BaseListOptions

Defined in: [src/types/options.ts:11](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L11)

Fields shared between posts/pages/comments listing options.

## Extended by

- [`PostsListOptions`](PostsListOptions.md)
- [`CommentsListOptions`](CommentsListOptions.md)
- [`SearchOptions`](SearchOptions.md)
- [`FeedOptions`](FeedOptions.md)

## Properties

### limit?

> `optional` **limit?**: `number` \| `null`

Defined in: [src/types/options.ts:22](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L22)

Alias for Blogger's `max-results`.

#### Default

25
Pass `null` to omit `max-results` from the request entirely (Blogger
then applies its own default page size).

***

### orderBy?

> `optional` **orderBy?**: `"updated"` \| `"published"`

Defined in: [src/types/options.ts:26](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L26)

Sort field.

***

### page?

> `optional` **page?**: `number`

Defined in: [src/types/options.ts:16](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L16)

Page number (1-based). Converted internally to `startIndex` using
`limit`. Ignored if `startIndex` is also provided.

***

### publishedMax?

> `optional` **publishedMax?**: `string` \| `Date`

Defined in: [src/types/options.ts:30](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L30)

Only include entries published on/before this date.

***

### publishedMin?

> `optional` **publishedMin?**: `string` \| `Date`

Defined in: [src/types/options.ts:28](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L28)

Only include entries published on/after this date.

***

### startIndex?

> `optional` **startIndex?**: `number`

Defined in: [src/types/options.ts:24](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L24)

Raw 1-based start index, takes precedence over `page`.

***

### summary?

> `optional` **summary?**: `boolean`

Defined in: [src/types/options.ts:36](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L36)

When `true`, requests the lightweight "summary" projection.

***

### updatedMax?

> `optional` **updatedMax?**: `string` \| `Date`

Defined in: [src/types/options.ts:34](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L34)

Only include entries updated on/before this date.

***

### updatedMin?

> `optional` **updatedMin?**: `string` \| `Date`

Defined in: [src/types/options.ts:32](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L32)

Only include entries updated on/after this date.
