[**blogr**](../README.md)

***

[blogr](../README.md) / Client

# Class: Client

Defined in: [src/core/client.ts:42](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L42)

Resolves a blog URL or numeric id into request base URLs, and performs
(optionally cached, event-emitting) requests against the Blogger feed API.

## Constructors

### Constructor

> **new Client**(`urlOrId`, `options?`): `Client`

Defined in: [src/core/client.ts:52](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L52)

#### Parameters

##### urlOrId

`string` \| `URL`

##### options?

[`ClientOptions`](../interfaces/ClientOptions.md) = `{}`

#### Returns

`Client`

## Properties

### cache

> `readonly` **cache**: [`Cache`](Cache.md)

Defined in: [src/core/client.ts:44](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L44)

***

### events

> `readonly` **events**: [`EventEmitter`](EventEmitter.md)

Defined in: [src/core/client.ts:43](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L43)

## Methods

### fetchRaw()

> **fetchRaw**\<`T`\>(`url`, `options?`): `Promise`\<`T`\>

Defined in: [src/core/client.ts:245](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L245)

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

Defined in: [src/core/client.ts:121](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L121)

#### Returns

`Promise`\<`string`\>

***

### getBlogInfo()

> **getBlogInfo**(`options?`): `Promise`\<[`BlogInfo`](../interfaces/BlogInfo.md)\>

Defined in: [src/core/client.ts:103](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L103)

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

Defined in: [src/core/client.ts:126](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L126)

#### Returns

`Promise`\<`string`\>

***

### getDomainBase()

> **getDomainBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:132](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L132)

#### Returns

`Promise`\<`string`\>

***

### getServiceBase()

> **getServiceBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:136](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L136)

#### Returns

`Promise`\<`string`\>

***

### req()

> **req**(`path`, `options?`): `Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

Defined in: [src/core/client.ts:152](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L152)

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

Defined in: [src/core/client.ts:214](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L214)

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

Defined in: [src/core/client.ts:141](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/client.ts#L141)

Returns the raw feed URL for `path` without performing a request.

#### Parameters

##### path

`string` \| `URL`

##### options?

`Omit`\<[`RequestOptions`](../interfaces/RequestOptions.md), `"signal"`\> = `{}`

#### Returns

`URL`
