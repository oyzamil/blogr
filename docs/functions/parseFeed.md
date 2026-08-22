[**blogr**](../README.md)

***

[blogr](../README.md) / parseFeed

# Function: parseFeed()

> **parseFeed**(`input`): [`ParsedFeed`](../interfaces/ParsedFeed.md)

Defined in: [src/parser/feed-parser.ts:373](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/parser/feed-parser.ts#L373)

Parses a raw Blogger GData JSON response (the shape returned by
`?alt=json`) into a typed [ParsedFeed](../interfaces/ParsedFeed.md).

Accepts either `{ feed: { entry } }` (a full feed response) or
`{ entry }` (a single-entry response).

## Parameters

### input

`unknown`

## Returns

[`ParsedFeed`](../interfaces/ParsedFeed.md)
