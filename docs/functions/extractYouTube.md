[**blogr**](../README.md)

***

[blogr](../README.md) / extractYouTube

# Function: extractYouTube()

> **extractYouTube**(`input`): [`ExtractedYouTube`](../interfaces/ExtractedYouTube.md)[]

Defined in: [src/parser/html.ts:172](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/parser/html.ts#L172)

Extracts every unique YouTube video referenced (as an `<iframe>` or link) in a post.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

[`ExtractedYouTube`](../interfaces/ExtractedYouTube.md)[]
