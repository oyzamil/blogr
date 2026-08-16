[**blogr**](../README.md)

***

[blogr](../README.md) / AuthorsModule

# Class: AuthorsModule

Defined in: [src/modules/authors.ts:31](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/modules/authors.ts#L31)

Lists distinct post authors, each with post count and stats derived from
their posts.

Blogger's feed API has no dedicated authors endpoint, so this aggregates
authors seen across the blog's posts.

By default (no `sampleSize`) `max-results` is not sent on the request at
all, and every page of results is walked via the feed's own pagination
until exhausted — so every author across every post is counted, at the
cost of one request per page for blogs with a lot of posts. Pass
`sampleSize` to instead cap the scan to a single request of that many
most-recent posts.

## Constructors

### Constructor

> **new AuthorsModule**(`posts`): `AuthorsModule`

Defined in: [src/modules/authors.ts:32](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/modules/authors.ts#L32)

#### Parameters

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`AuthorsModule`

## Methods

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`AuthorWithPostCount`](../interfaces/AuthorWithPostCount.md)[]\>

Defined in: [src/modules/authors.ts:34](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/modules/authors.ts#L34)

#### Parameters

##### options?

###### sampleSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`AuthorWithPostCount`](../interfaces/AuthorWithPostCount.md)[]\>
