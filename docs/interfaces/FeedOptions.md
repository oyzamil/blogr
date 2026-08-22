[**blogr**](../README.md)

***

[blogr](../README.md) / FeedOptions

# Interface: FeedOptions

Defined in: [src/modules/feed.ts:6](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/feed.ts#L6)

Fields shared between posts/pages/comments listing options.

## Extends

- [`BaseListOptions`](BaseListOptions.md)

## Properties

### limit?

> `optional` **limit?**: `number` \| `null`

Defined in: [src/types/options.ts:22](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L22)

Alias for Blogger's `max-results`.

#### Default

25
Pass `null` to omit `max-results` from the request entirely (Blogger
then applies its own default page size).

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`limit`](BaseListOptions.md#limit)

***

### orderBy?

> `optional` **orderBy?**: `"updated"` \| `"published"`

Defined in: [src/types/options.ts:26](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L26)

Sort field.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`orderBy`](BaseListOptions.md#orderby)

***

### page?

> `optional` **page?**: `number`

Defined in: [src/types/options.ts:16](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L16)

Page number (1-based). Converted internally to `startIndex` using
`limit`. Ignored if `startIndex` is also provided.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`page`](BaseListOptions.md#page)

***

### publishedMax?

> `optional` **publishedMax?**: `string` \| `Date`

Defined in: [src/types/options.ts:30](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L30)

Only include entries published on/before this date.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`publishedMax`](BaseListOptions.md#publishedmax)

***

### publishedMin?

> `optional` **publishedMin?**: `string` \| `Date`

Defined in: [src/types/options.ts:28](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L28)

Only include entries published on/after this date.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`publishedMin`](BaseListOptions.md#publishedmin)

***

### startIndex?

> `optional` **startIndex?**: `number`

Defined in: [src/types/options.ts:24](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L24)

Raw 1-based start index, takes precedence over `page`.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`startIndex`](BaseListOptions.md#startindex)

***

### summary?

> `optional` **summary?**: `boolean`

Defined in: [src/types/options.ts:36](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L36)

When `true`, requests the lightweight "summary" projection.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`summary`](BaseListOptions.md#summary)

***

### type?

> `optional` **type?**: `"posts"` \| `"comments"` \| `"pages"`

Defined in: [src/modules/feed.ts:8](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/feed.ts#L8)

Which feed to fetch.

#### Default

```ts
"posts"
```

***

### updatedMax?

> `optional` **updatedMax?**: `string` \| `Date`

Defined in: [src/types/options.ts:34](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L34)

Only include entries updated on/before this date.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`updatedMax`](BaseListOptions.md#updatedmax)

***

### updatedMin?

> `optional` **updatedMin?**: `string` \| `Date`

Defined in: [src/types/options.ts:32](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/options.ts#L32)

Only include entries updated on/after this date.

#### Inherited from

[`BaseListOptions`](BaseListOptions.md).[`updatedMin`](BaseListOptions.md#updatedmin)
