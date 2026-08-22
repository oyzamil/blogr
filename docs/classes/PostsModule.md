[**blogr**](../README.md)

***

[blogr](../README.md) / PostsModule

# Class: PostsModule

Defined in: [src/modules/posts.ts:22](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L22)

Methods for listing, fetching and searching blog posts.

## Constructors

### Constructor

> **new PostsModule**(`client`): `PostsModule`

Defined in: [src/modules/posts.ts:23](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L23)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`PostsModule`

## Methods

### featured()

> **featured**(`requestOptions?`): `Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

Defined in: [src/modules/posts.ts:85](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L85)

Best-effort "featured" post — Blogger's public feed API has no explicit
flag for a pinned/featured post, so this returns the first post in the
blog's default (unfiltered) order, which is the pinned post when one
is set.

#### Parameters

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

***

### get()

> **get**(`postId`, `options?`, `requestOptions?`): `Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

Defined in: [src/modules/posts.ts:39](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L39)

Fetches a single post by id, or `null` if it doesn't exist.

#### Parameters

##### postId

`string`

##### options?

###### summary?

`boolean`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

***

### latest()

> **latest**(`options?`, `requestOptions?`): `Promise`\<[`Post`](../interfaces/Post.md)[]\>

Defined in: [src/modules/posts.ts:67](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L67)

Returns the most recent posts (default 5), newest first. Pass a bare
`number` for just a limit, or an options object to also filter by
`label`, `query`, date range, etc.

#### Parameters

##### options?

[`LatestOptions`](../type-aliases/LatestOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Post`](../interfaces/Post.md)[]\>

***

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/posts.ts:26](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L26)

Lists posts, optionally filtered/paginated/sorted.

#### Parameters

##### options?

[`PostsListOptions`](../interfaces/PostsListOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

***

### query()

> **query**(`query`, `options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/posts.ts:53](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L53)

Full-text search across posts (equivalent to `search()` scoped to posts).

#### Parameters

##### query

`string`

##### options?

`Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"query"` \| `"label"`\> = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

***

### random()

> **random**(`options?`, `requestOptions?`): `Promise`\<[`Post`](../interfaces/Post.md)[]\>

Defined in: [src/modules/posts.ts:95](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/posts.ts#L95)

Returns random post(s) (default 1) by sampling random indexes. Pass a
bare `number` for just a count, or an options object to also filter by
`label`, `query`, date range, etc.

#### Parameters

##### options?

[`RandomOptions`](../type-aliases/RandomOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Post`](../interfaces/Post.md)[]\>
