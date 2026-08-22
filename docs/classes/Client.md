[**blogr**](../README.md)

***

[blogr](../README.md) / Client

# Class: Client

Defined in: [src/core/client.ts:77](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L77)

Resolves a blog URL or numeric id into request base URLs, and performs
(optionally cached, event-emitting) requests against the Blogger feed API.

## Constructors

### Constructor

> **new Client**(`urlOrId`, `options?`): `Client`

Defined in: [src/core/client.ts:87](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L87)

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

Defined in: [src/core/client.ts:79](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L79)

***

### events

> `readonly` **events**: [`EventEmitter`](EventEmitter.md)

Defined in: [src/core/client.ts:78](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L78)

## Methods

### fetchRaw()

> **fetchRaw**\<`T`\>(`url`, `options?`): `Promise`\<`T`\>

Defined in: [src/core/client.ts:280](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L280)

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

Defined in: [src/core/client.ts:156](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L156)

#### Returns

`Promise`\<`string`\>

***

### getBlogInfo()

> **getBlogInfo**(`options?`): `Promise`\<[`BlogInfo`](../interfaces/BlogInfo.md)\>

Defined in: [src/core/client.ts:138](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L138)

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

Defined in: [src/core/client.ts:161](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L161)

#### Returns

`Promise`\<`string`\>

***

### getDomainBase()

> **getDomainBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:167](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L167)

#### Returns

`Promise`\<`string`\>

***

### getServiceBase()

> **getServiceBase**(): `Promise`\<`string`\>

Defined in: [src/core/client.ts:171](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L171)

#### Returns

`Promise`\<`string`\>

***

### req()

> **req**(`path`, `options?`): `Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

Defined in: [src/core/client.ts:187](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L187)

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

Defined in: [src/core/client.ts:249](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L249)

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

Defined in: [src/core/client.ts:176](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/client.ts#L176)

Returns the raw feed URL for `path` without performing a request.

#### Parameters

##### path

`string` \| `URL`

##### options?

`Omit`\<[`RequestOptions`](../interfaces/RequestOptions.md), `"signal"`\> = `{}`

#### Returns

`URL`
