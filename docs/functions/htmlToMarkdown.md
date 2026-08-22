[**blogr**](../README.md)

***

[blogr](../README.md) / htmlToMarkdown

# Function: htmlToMarkdown()

> **htmlToMarkdown**(`input`): `string`

Defined in: [src/parser/html.ts:51](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/parser/html.ts#L51)

Best-effort HTML → Markdown conversion for Blogger post content. Handles
the common tags Blogger emits: headings, paragraphs, bold/italic, links,
images, lists, blockquotes and inline/block code.

## Parameters

### input

`string` \| [`Post`](../interfaces/Post.md) \| `null` \| `undefined`

## Returns

`string`
