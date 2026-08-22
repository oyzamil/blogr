[**blogr**](../README.md)

***

[blogr](../README.md) / extractImages

# Function: extractImages()

> **extractImages**(`input`, `includeThumbnail?`): `string`[]

Defined in: [src/parser/html.ts:111](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/parser/html.ts#L111)

Extracts every unique `<img>` source URL from a post's HTML content.
Optionally includes `post.thumbnail`.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

### includeThumbnail?

`boolean` = `true`

## Returns

`string`[]
