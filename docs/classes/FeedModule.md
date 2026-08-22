[**blogr**](../README.md)

***

[blogr](../README.md) / FeedModule

# Class: FeedModule

Defined in: [src/modules/feed.ts:17](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L17)

Fetches the blog's feed in any of Blogger's supported wire formats.

## Constructors

### Constructor

> **new FeedModule**(`client`): `FeedModule`

Defined in: [src/modules/feed.ts:18](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L18)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`FeedModule`

## Methods

### atom()

> **atom**(`options?`, `requestOptions?`): `Promise`\<`string`\>

Defined in: [src/modules/feed.ts:33](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L33)

Fetches the feed as raw Atom XML text.

#### Parameters

##### options?

[`FeedOptions`](../interfaces/FeedOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<`string`\>

***

### json()

> **json**(`options?`, `requestOptions?`): `Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

Defined in: [src/modules/feed.ts:21](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L21)

Fetches and parses the feed as JSON (default transport).

#### Parameters

##### options?

[`FeedOptions`](../interfaces/FeedOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

***

### jsonp()

> **jsonp**(`options?`, `requestOptions?`): `Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

Defined in: [src/modules/feed.ts:55](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L55)

Fetches and parses the feed over JSONP (browser-only; requires `jsonp: true`).

#### Parameters

##### options?

[`FeedOptions`](../interfaces/FeedOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`ParsedFeed`](../interfaces/ParsedFeed.md)\>

***

### rss()

> **rss**(`options?`, `requestOptions?`): `Promise`\<`string`\>

Defined in: [src/modules/feed.ts:44](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/feed.ts#L44)

Fetches the feed as raw RSS 2.0 XML text.

#### Parameters

##### options?

[`FeedOptions`](../interfaces/FeedOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<`string`\>
