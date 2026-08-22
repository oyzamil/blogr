[**blogr**](../README.md)

***

[blogr](../README.md) / htmlToMarkdown

# Function: htmlToMarkdown()

> **htmlToMarkdown**(`input`): `string`

Defined in: [src/parser/html.ts:51](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/parser/html.ts#L51)

Best-effort HTML → Markdown conversion for Blogger post content. Handles
the common tags Blogger emits: headings, paragraphs, bold/italic, links,
images, lists, blockquotes and inline/block code.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

`string`
