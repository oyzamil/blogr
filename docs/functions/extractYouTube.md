[**blogr**](../README.md)

***

[blogr](../README.md) / extractYouTube

# Function: extractYouTube()

> **extractYouTube**(`input`): [`ExtractedYouTube`](../interfaces/ExtractedYouTube.md)[]

Defined in: [src/parser/html.ts:172](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/parser/html.ts#L172)

Extracts every unique YouTube video referenced (as an `<iframe>` or link) in a post.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

[`ExtractedYouTube`](../interfaces/ExtractedYouTube.md)[]
