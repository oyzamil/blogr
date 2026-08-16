[**blogr**](../README.md)

***

[blogr](../README.md) / htmlToMarkdown

# Function: htmlToMarkdown()

> **htmlToMarkdown**(`input`): `string`

Defined in: [src/parser/html.ts:51](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/parser/html.ts#L51)

Best-effort HTML → Markdown conversion for Blogger post content. Handles
the common tags Blogger emits: headings, paragraphs, bold/italic, links,
images, lists, blockquotes and inline/block code.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

`string`
