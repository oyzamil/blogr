[**blogr**](../README.md)

***

[blogr](../README.md) / PagesModule

# Class: PagesModule

Defined in: [src/modules/pages.ts:13](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/pages.ts#L13)

Methods for listing and fetching static blog pages.

## Constructors

### Constructor

> **new PagesModule**(`client`): `PagesModule`

Defined in: [src/modules/pages.ts:14](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/pages.ts#L14)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`PagesModule`

## Methods

### get()

> **get**(`pageId`, `options?`, `requestOptions?`): `Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

Defined in: [src/modules/pages.ts:32](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/pages.ts#L32)

Fetches a single page by id, or `null` if it doesn't exist.

#### Parameters

##### pageId

`string`

##### options?

###### summary?

`boolean`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Post`](../interfaces/Post.md) \| `null`\>

***

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/pages.ts:17](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/pages.ts#L17)

Lists the blog's static pages.

#### Parameters

##### options?

[`BaseListOptions`](../interfaces/BaseListOptions.md) = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>
