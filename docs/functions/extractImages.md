[**blogr**](../README.md)

***

[blogr](../README.md) / extractImages

# Function: extractImages()

> **extractImages**(`input`, `includeThumbnail?`): `string`[]

Defined in: [src/parser/html.ts:111](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/parser/html.ts#L111)

Extracts every unique `<img>` source URL from a post's HTML content.
Optionally includes `post.thumbnail`.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

### includeThumbnail?

`boolean` = `true`

## Returns

`string`[]
