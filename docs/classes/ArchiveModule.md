[**blogr**](../README.md)

***

[blogr](../README.md) / ArchiveModule

# Class: ArchiveModule

Defined in: [src/modules/archive.ts:23](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/archive.ts#L23)

Year/month archive browsing. Blogger's public feed API has no dedicated
archive endpoint, so this is built on top of `publishedMin`/`publishedMax`
range queries against the posts feed.

## Constructors

### Constructor

> **new ArchiveModule**(`posts`): `ArchiveModule`

Defined in: [src/modules/archive.ts:24](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/archive.ts#L24)

#### Parameters

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`ArchiveModule`

## Methods

### month()

> **month**(`year`, `month`, `options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/archive.ts:40](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/archive.ts#L40)

Lists posts published in `month` (1-based) of `year`.

#### Parameters

##### year

`number`

##### month

`number`

##### options?

###### limit?

`number`

###### page?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

***

### year()

> **year**(`year`, `options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/archive.ts:27](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/archive.ts#L27)

Lists posts published in `year`.

#### Parameters

##### year

`number`

##### options?

###### limit?

`number`

###### page?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

***

### years()

> **years**(`requestOptions?`): `Promise`\<`number`[]\>

Defined in: [src/modules/archive.ts:59](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/archive.ts#L59)

Returns every year that has at least one post, newest first.

Determined by locating the newest and oldest post (via `totalResults`
+ `startIndex`), since there's no direct "list of years" endpoint.

#### Parameters

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<`number`[]\>
