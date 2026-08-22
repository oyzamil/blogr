[**blogr**](../README.md)

***

[blogr](../README.md) / extractLinks

# Function: extractLinks()

> **extractLinks**(`input`): [`ExtractedLink`](../interfaces/ExtractedLink.md)[]

Defined in: [src/parser/html.ts:145](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/parser/html.ts#L145)

Extracts every `<a href>` from a post's HTML content, in document order.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

[`ExtractedLink`](../interfaces/ExtractedLink.md)[]
