[**blogr**](../README.md)

***

[blogr](../README.md) / extractImages

# Function: extractImages()

> **extractImages**(`input`, `includeThumbnail?`): `string`[]

Defined in: [src/parser/html.ts:111](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/parser/html.ts#L111)

Extracts every unique `<img>` source URL from a post's HTML content.
Optionally includes `post.thumbnail`.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

### includeThumbnail?

`boolean` = `true`

## Returns

`string`[]
