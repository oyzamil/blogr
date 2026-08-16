[**blogr**](../README.md)

***

[blogr](../README.md) / parseFeed

# Function: parseFeed()

> **parseFeed**(`input`): [`ParsedFeed`](../interfaces/ParsedFeed.md)

Defined in: [src/parser/feed-parser.ts:373](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/parser/feed-parser.ts#L373)

Parses a raw Blogger GData JSON response (the shape returned by
`?alt=json`) into a typed [ParsedFeed](../interfaces/ParsedFeed.md).

Accepts either `{ feed: { entry } }` (a full feed response) or
`{ entry }` (a single-entry response).

## Parameters

### input

`unknown`

## Returns

[`ParsedFeed`](../interfaces/ParsedFeed.md)
