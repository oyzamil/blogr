[**blogr**](../README.md)

***

[blogr](../README.md) / BlogInfo

# Interface: BlogInfo

Defined in: [src/types/feed.ts:60](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L60)

Blog-level metadata.

## Properties

### author

> **author**: [`Author`](Author.md)

Defined in: [src/types/feed.ts:76](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L76)

Blog author/owner.

***

### favicon

> **favicon**: `string` \| `null`

Defined in: [src/types/feed.ts:78](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L78)

Favicon URL, best-effort (derived), or `null`.

***

### id

> **id**: `string`

Defined in: [src/types/feed.ts:62](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L62)

Numeric Blogger blog id.

***

### labels

> **labels**: `string`[]

Defined in: [src/types/feed.ts:70](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L70)

All labels currently known to the feed response.

***

### language

> **language**: `string` \| `null`

Defined in: [src/types/feed.ts:72](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L72)

Language code of the blog, if available.

***

### links

> **links**: [`Link`](Link.md)[]

Defined in: [src/types/feed.ts:80](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L80)

Raw `<link>` entries from the feed.

***

### subtitle

> **subtitle**: `string` \| `null`

Defined in: [src/types/feed.ts:66](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L66)

Blog subtitle/description, or `null`.

***

### title

> **title**: `string`

Defined in: [src/types/feed.ts:64](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L64)

Blog title.

***

### updated

> **updated**: `string`

Defined in: [src/types/feed.ts:74](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L74)

ISO timestamp of the last update to the blog.

***

### url

> **url**: `string`

Defined in: [src/types/feed.ts:68](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/types/feed.ts#L68)

Canonical URL of the blog.
