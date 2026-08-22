[**blogr**](../README.md)

***

[blogr](../README.md) / Client

# Class: Client

Defined in: [src/core/client.ts:73](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L73)

Resolves a blog URL or numeric id into request base URLs, and performs
(optionally cached, event-emitting) requests against the Blogger feed API.

## Constructors

### Constructor

> **new Client**(`urlOrId`, `options?`): `Client`

Defined in: [src/core/client.ts:83](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L83)

#### Parameters

##### urlOrId

`string` \| `URL`

##### options?

[`ClientOptions`](../interfaces/ClientOptions.md) = `{}`

#### Returns

`Client`

## Properties

### archive

> `readonly` **archive**: [`ArchiveModule`](ArchiveModule.md)

Defined in: [src/modules/archive.ts:82](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/archive.ts#L82)

Lazily-created [ArchiveModule](ArchiveModule.md) for this client.

***

### authors

> `readonly` **authors**: [`AuthorsModule`](AuthorsModule.md)

Defined in: [src/modules/authors.ts:109](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/authors.ts#L109)

Lazily-created [AuthorsModule](AuthorsModule.md) for this client.

***

### cache

> `readonly` **cache**: [`Cache`](Cache.md)

Defined in: [src/core/client.ts:75](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L75)

***

### comments

> `readonly` **comments**: [`CommentsModule`](CommentsModule.md)

Defined in: [src/modules/comments.ts:142](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/comments.ts#L142)

Lazily-created [CommentsModule](CommentsModule.md) for this client.

***

### events

> `readonly` **events**: [`EventEmitter`](EventEmitter.md)

Defined in: [src/core/client.ts:74](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L74)

***

### feed

> `readonly` **feed**: [`FeedModule`](FeedModule.md)

Defined in: [src/modules/feed.ts:70](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L70)

Lazily-created [FeedModule](FeedModule.md) for this client.

***

### images

> `readonly` **images**: [`ImagesModule`](ImagesModule.md)

Defined in: [src/modules/images.ts:64](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/images.ts#L64)

Lazily-created [ImagesModule](ImagesModule.md) for this client.

***

### labels

> `readonly` **labels**: [`LabelsModule`](LabelsModule.md)

Defined in: [src/modules/labels.ts:87](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/labels.ts#L87)

Lazily-created [LabelsModule](LabelsModule.md) for this client.

***

### pages

> `readonly` **pages**: [`PagesModule`](PagesModule.md)

Defined in: [src/modules/pages.ts:49](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/pages.ts#L49)

Lazily-created [PagesModule](PagesModule.md) for this client.

***

### posts

> `readonly` **posts**: [`PostsModule`](PostsModule.md)

Defined in: [src/modules/posts.ts:129](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/posts.ts#L129)

Lazily-created [PostsModule](PostsModule.md) for this client.

***

### search

> `readonly` **search**: [`SearchModule`](SearchModule.md)

Defined in: [src/modules/search.ts:44](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/search.ts#L44)

Lazily-created [SearchModule](SearchModule.md) for this client.

***

### stats

> `readonly` **stats**: [`StatsModule`](StatsModule.md)

Defined in: [src/modules/stats.ts:48](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/stats.ts#L48)

Lazily-created [StatsModule](StatsModule.md) for this client.

***

### url

> `readonly` **url**: [`UrlModule`](UrlModule.md)

Defined in: [src/modules/url.ts:80](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/url.ts#L80)

Lazily-created [UrlModule](UrlModule.md) for this client.

## Methods

### fetchRaw()

> **fetchRaw**\<`T`\>(`url`, `options?`): `Promise`\<`T`\>

Defined in: [src/core/client.ts:276](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L276)

Low-level: fetch an arbitrary URL and return parsed JSON (no feed parsing).

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### url

`string` \| `URL`

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<`T`\>

***

### getBlogId()

> **getBlogId**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:152](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L152)

#### Returns

`Promise`\<`string`\>

***

### getBlogInfo()

> **getBlogInfo**(`options?`): `Promise`\<[`BlogInfo`](../interfaces/BlogInfo.md)\>

Defined in: [src/core/client.ts:134](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L134)

Resolves (and caches) blog-level metadata, needed to discover id/url lazily.

#### Parameters

##### options?

###### signal?

`AbortSignal`

#### Returns

`Promise`\<[`BlogInfo`](../interfaces/BlogInfo.md)\>

***

### getBlogUrl()

> **getBlogUrl**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:157](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L157)

#### Returns

`Promise`\<`string`\>

***

### getDomainBase()

> **getDomainBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:163](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L163)

#### Returns

`Promise`\<`string`\>

***

### getServiceBase()

> **getServiceBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:167](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L167)

#### Returns

`Promise`\<`string`\>

***

### req()

> **req**(`path`, `options?`): `Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

Defined in: [src/core/client.ts:183](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L183)

Performs a request against the Blogger feed API and returns the parsed feed.

#### Parameters

##### path

`string` \| `URL`

##### options?

[`RequestOptions`](../interfaces/RequestOptions.md) = `{}`

#### Returns

`Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

***

### reqRaw()

> **reqRaw**(`path`, `format`, `options?`): `Promise`\<`string`\>

Defined in: [src/core/client.ts:245](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L245)

Fetches a feed url in `atom` or `rss` format and returns the raw XML text.

#### Parameters

##### path

`string` \| `URL`

##### format

`"atom"` \| `"rss"`

##### options?

`Omit`\<[`RequestOptions`](../interfaces/RequestOptions.md), `"format"`\> = `{}`

#### Returns

`Promise`\<`string`\>

***

### resolveUrl()

> **resolveUrl**(`path`, `options?`): `URL`

Defined in: [src/core/client.ts:172](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/core/client.ts#L172)

Returns the raw feed URL for `path` without performing a request.

#### Parameters

##### path

`string` \| `URL`

##### options?

`Omit`\<[`RequestOptions`](../interfaces/RequestOptions.md), `"signal"`\> = `{}`

#### Returns

`URL`
