[**blogr**](../README.md)

***

[blogr](../README.md) / AuthorsModule

# Class: AuthorsModule

Defined in: [src/modules/authors.ts:32](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/authors.ts#L32)

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

Defined in: [src/modules/authors.ts:33](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/authors.ts#L33)

#### Parameters

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`AuthorsModule`

## Methods

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`AuthorWithPostCount`](../interfaces/AuthorWithPostCount.md)[]\>

Defined in: [src/modules/authors.ts:35](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/authors.ts#L35)

#### Parameters

##### options?

###### sampleSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`AuthorWithPostCount`](../interfaces/AuthorWithPostCount.md)[]\>
