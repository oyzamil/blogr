[**blogr**](../README.md)

***

[blogr](../README.md) / CommentsModule

# Class: CommentsModule

Defined in: [src/modules/comments.ts:18](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/comments.ts#L18)

Methods for listing and fetching comments.

## Constructors

### Constructor

> **new CommentsModule**(`client`): `CommentsModule`

Defined in: [src/modules/comments.ts:19](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/comments.ts#L19)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`CommentsModule`

## Methods

### commenters()

> **commenters**(`options?`, `requestOptions?`): `Promise`\<[`CommenterWithCount`](../interfaces/CommenterWithCount.md)[]\>

Defined in: [src/modules/comments.ts:103](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/comments.ts#L103)

Lists distinct commenters, each with their comment count.

By default (no `sampleSize`) `max-results` is not sent on the
request, and every page is walked via pagination until exhausted —
so every comment on the blog gets counted. Pass `sampleSize` to cap
the scan to a single request of that many most-recent comments
instead. Pass `postId` to scope to one post's commenters.

#### Parameters

##### options?

###### postId?

`string`

###### sampleSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`CommenterWithCount`](../interfaces/CommenterWithCount.md)[]\>

***

### get()

> **get**(`commentId`, `postId?`, `options?`, `requestOptions?`): `Promise`\<[`Comment`](../interfaces/Comment.md) \| `null`\>

Defined in: [src/modules/comments.ts:52](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/comments.ts#L52)

Fetches a single comment by id.

Passing `postId` performs one direct request. Without it, this scans
the blog-level comments feed (in pages of `scanPageSize`, up to
`maxScan` comments) since Blogger's feed API has no id-only comment
lookup — prefer passing `postId` when you have it.

#### Parameters

##### commentId

`string`

##### postId?

`string`

##### options?

###### maxScan?

`number`

###### scanPageSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Comment`](../interfaces/Comment.md) \| `null`\>

***

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Comment`](../interfaces/Comment.md)\>\>

Defined in: [src/modules/comments.ts:22](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/modules/comments.ts#L22)

Lists comments for the whole blog, or for a single post when `options.postId` is set.

#### Parameters

##### options?

[`CommentsListOptions`](../interfaces/CommentsListOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Comment`](../interfaces/Comment.md)\>\>
