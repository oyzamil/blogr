[**blogr**](../README.md)

***

[blogr](../README.md) / Post

# Interface: Post

Defined in: [src/types/feed.ts:84](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L84)

A Blogger post or page entry.

## Properties

### author

> **author**: [`Author`](Author.md)

Defined in: [src/types/feed.ts:98](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L98)

Entry author.

***

### comments

> **comments**: [`PostCommentInfo`](PostCommentInfo.md)

Defined in: [src/types/feed.ts:108](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L108)

Comment count/metadata for this entry.

***

### content

> **content**: `string` \| `null`

Defined in: [src/types/feed.ts:100](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L100)

Full HTML content, or `null` when only a summary was requested.

***

### geo

> **geo**: [`Geo`](Geo.md)

Defined in: [src/types/feed.ts:110](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L110)

Geo-location, if attached.

***

### id

> **id**: `string`

Defined in: [src/types/feed.ts:86](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L86)

Entry id (numeric string).

***

### labels

> **labels**: `string`[]

Defined in: [src/types/feed.ts:96](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L96)

Labels attached to the entry.

***

### links

> **links**: [`Link`](Link.md)[]

Defined in: [src/types/feed.ts:112](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L112)

Raw `<link>` entries from the feed.

***

### published

> **published**: `string`

Defined in: [src/types/feed.ts:92](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L92)

ISO published timestamp.

***

### summary

> **summary**: `string` \| `null`

Defined in: [src/types/feed.ts:102](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L102)

Plain-text/HTML summary/snippet, or `null`.

***

### thumbnail

> **thumbnail**: `string` \| `null`

Defined in: [src/types/feed.ts:104](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L104)

Best-guess thumbnail extracted from content, or `null`.

***

### thumbnailAlt

> **thumbnailAlt**: `string` \| `null`

Defined in: [src/types/feed.ts:106](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L106)

Thumbnail explicitly selected by Blogger, or `null`.

***

### title

> **title**: `string`

Defined in: [src/types/feed.ts:88](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L88)

Title of the entry.

***

### updated

> **updated**: `string`

Defined in: [src/types/feed.ts:94](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L94)

ISO last-updated timestamp.

***

### url

> **url**: `string`

Defined in: [src/types/feed.ts:90](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L90)

Canonical URL of the entry.
