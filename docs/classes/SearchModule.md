[**blogr**](../README.md)

***

[blogr](../README.md) / SearchModule

# Class: SearchModule

Defined in: [src/modules/search.ts:12](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/search.ts#L12)

Full-text search across posts.

## Constructors

### Constructor

> **new SearchModule**(`posts`): `SearchModule`

Defined in: [src/modules/search.ts:13](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/search.ts#L13)

#### Parameters

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`SearchModule`

## Methods

### run()

> **run**(`input`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/search.ts:16](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/modules/search.ts#L16)

Searches posts by a plain query string, or a [SearchOptions](../interfaces/SearchOptions.md) object.

#### Parameters

##### input

`string` \| [`SearchOptions`](../interfaces/SearchOptions.md)

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>
