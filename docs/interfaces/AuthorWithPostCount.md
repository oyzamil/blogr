[**blogr**](../README.md)

***

[blogr](../README.md) / AuthorWithPostCount

# Interface: AuthorWithPostCount

Defined in: [src/modules/authors.ts:6](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/authors.ts#L6)

An [Author](Author.md) plus stats derived from the scanned posts.

## Extends

- [`Author`](Author.md)

## Properties

### email

> **email**: `string` \| `null`

Defined in: [src/types/feed.ts:18](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L18)

Email on file, or `null`. Blogger's public feed almost always masks
this as `noreply@blogger.com` for privacy — rarely a real address.

#### Inherited from

[`Author`](Author.md).[`email`](Author.md#email)

***

### firstPostDate

> **firstPostDate**: `string` \| `null`

Defined in: [src/modules/authors.ts:10](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/authors.ts#L10)

Earliest `published` timestamp seen for this author, or `null`.

***

### id

> **id**: `string` \| `null`

Defined in: [src/types/feed.ts:13](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L13)

Numeric Blogger profile id, parsed out of `url` (e.g. the trailing
digits of `.../profile/12345678901234567890`), or `null` if `url`
isn't a recognizable profile link. More stable than matching on
`name`, which can change or collide between authors.

#### Inherited from

[`Author`](Author.md).[`id`](Author.md#id)

***

### image

> **image**: `string` \| `null`

Defined in: [src/types/feed.ts:20](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L20)

Avatar/profile image URL of the author, or `null` if unavailable.

#### Inherited from

[`Author`](Author.md).[`image`](Author.md#image)

***

### imageHeight

> **imageHeight**: `number` \| `null`

Defined in: [src/types/feed.ts:24](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L24)

Avatar height in px, if the feed reported one, else `null`.

#### Inherited from

[`Author`](Author.md).[`imageHeight`](Author.md#imageheight)

***

### imageWidth

> **imageWidth**: `number` \| `null`

Defined in: [src/types/feed.ts:22](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L22)

Avatar width in px, if the feed reported one, else `null`.

#### Inherited from

[`Author`](Author.md).[`imageWidth`](Author.md#imagewidth)

***

### labels

> **labels**: `string`[]

Defined in: [src/modules/authors.ts:14](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/authors.ts#L14)

Union of every label/category seen across this author's posts.

***

### lastPostDate

> **lastPostDate**: `string` \| `null`

Defined in: [src/modules/authors.ts:12](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/authors.ts#L12)

Latest `published` timestamp seen for this author, or `null`.

***

### name

> **name**: `string` \| `null`

Defined in: [src/types/feed.ts:4](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L4)

Display name of the author, or `null` if unavailable.

#### Inherited from

[`Author`](Author.md).[`name`](Author.md#name)

***

### totalPosts

> **totalPosts**: `number`

Defined in: [src/modules/authors.ts:8](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/authors.ts#L8)

Number of posts by this author found in the scanned range.

***

### url

> **url**: `string` \| `null`

Defined in: [src/types/feed.ts:6](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/types/feed.ts#L6)

Profile URL of the author, or `null` if unavailable.

#### Inherited from

[`Author`](Author.md).[`url`](Author.md#url)
