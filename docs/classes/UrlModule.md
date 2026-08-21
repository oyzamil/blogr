[**blogr**](../README.md)

***

[blogr](../README.md) / UrlModule

# Class: UrlModule

Defined in: [src/modules/url.ts:11](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L11)

Builds raw Blogger feed URLs without performing any request.

## Constructors

### Constructor

> **new UrlModule**(`client`): `UrlModule`

Defined in: [src/modules/url.ts:12](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L12)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`UrlModule`

## Methods

### comments()

> **comments**(`postId?`, `options?`): `string`

Defined in: [src/modules/url.ts:49](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L49)

URL for the comments feed (blog-wide, or scoped to `postId`).

#### Parameters

##### postId?

`string`

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### label()

> **label**(`label`, `options?`): `string`

Defined in: [src/modules/url.ts:57](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L57)

URL for the posts feed filtered to `label` (or several labels).

#### Parameters

##### label

`string` \| `string`[]

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### page()

> **page**(`pageId`, `options?`): `string`

Defined in: [src/modules/url.ts:39](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L39)

URL for a single page entry.

#### Parameters

##### pageId

`string`

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### pages()

> **pages**(`options?`): `string`

Defined in: [src/modules/url.ts:32](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L32)

URL for the pages feed.

#### Parameters

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### post()

> **post**(`postId`, `options?`): `string`

Defined in: [src/modules/url.ts:22](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L22)

URL for a single post entry.

#### Parameters

##### postId

`string`

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### posts()

> **posts**(`options?`): `string`

Defined in: [src/modules/url.ts:15](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L15)

URL for the posts feed.

#### Parameters

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`

***

### search()

> **search**(`query`, `options?`): `string`

Defined in: [src/modules/url.ts:66](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/url.ts#L66)

URL for a full-text search against the posts feed.

#### Parameters

##### query

`string`

##### options?

[`UrlOptions`](../interfaces/UrlOptions.md) = `{}`

#### Returns

`string`
