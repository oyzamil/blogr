[**blogr**](../README.md)

***

[blogr](../README.md) / parseFeed

# Function: parseFeed()

> **parseFeed**(`input`): [`ParsedFeed`](../interfaces/ParsedFeed.md)

Defined in: [src/parser/feed-parser.ts:373](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/parser/feed-parser.ts#L373)

Parses a raw Blogger GData JSON response (the shape returned by
`?alt=json`) into a typed [ParsedFeed](../interfaces/ParsedFeed.md).

Accepts either `{ feed: { entry } }` (a full feed response) or
`{ entry }` (a single-entry response).

## Parameters

### input

`unknown`

## Returns

[`ParsedFeed`](../interfaces/ParsedFeed.md)
