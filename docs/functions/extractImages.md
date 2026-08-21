[**blogr**](../README.md)

***

[blogr](../README.md) / extractImages

# Function: extractImages()

> **extractImages**(`input`, `includeThumbnail?`): `string`[]

Defined in: [src/parser/html.ts:111](https://github.com/oyzamil/blogr/blob/51d1141d08b95ec7ef169378db9a9d42fca0048a/src/parser/html.ts#L111)

Extracts every unique `<img>` source URL from a post's HTML content.
Optionally includes `post.thumbnail`.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

### includeThumbnail?

`boolean` = `true`

## Returns

`string`[]
