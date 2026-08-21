[**blogr**](../README.md)

***

[blogr](../README.md) / ImagesModule

# Class: ImagesModule

Defined in: [src/modules/images.ts:17](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/images.ts#L17)

Aggregate image discovery across posts.

## Constructors

### Constructor

> **new ImagesModule**(`posts`): `ImagesModule`

Defined in: [src/modules/images.ts:18](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/images.ts#L18)

#### Parameters

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`ImagesModule`

## Methods

### list()

> **list**(`options?`, `requestOptions?`): `Promise`\<[`FoundImage`](../interfaces/FoundImage.md)[]\>

Defined in: [src/modules/images.ts:29](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/modules/images.ts#L29)

Returns every unique image found in post content, each tagged with
the post it came from.

By default (no `sampleSize`) `max-results` is not sent on the request
at all, and every page is walked via pagination until exhausted — so
every post in the blog gets scanned. Pass `sampleSize` to cap the
scan to a single request of that many most-recent posts instead.

#### Parameters

##### options?

###### sampleSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`FoundImage`](../interfaces/FoundImage.md)[]\>
