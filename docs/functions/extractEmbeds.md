[**blogr**](../README.md)

***

[blogr](../README.md) / extractEmbeds

# Function: extractEmbeds()

> **extractEmbeds**(`input`): [`ExtractedEmbed`](../interfaces/ExtractedEmbed.md)[]

Defined in: [src/parser/html.ts:220](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/parser/html.ts#L220)

Extracts every non-YouTube `<iframe>` embed (Spotify, Vimeo, Google Maps, forms, etc.) from a post.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

[`ExtractedEmbed`](../interfaces/ExtractedEmbed.md)[]
