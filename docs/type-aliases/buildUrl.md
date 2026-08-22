[**blogr**](../README.md)

***

[blogr](../README.md) / buildUrl

# Type Alias: buildUrl

> **buildUrl** = (`path`, `base`, `__namedParameters`) => `URL`

Defined in: [src/core/http.ts:22](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/core/http.ts#L22)

Builds a feed URL from a base + path + friendly query options.

## Parameters

### path

`string` \| `URL`

### base

`string` \| `URL`

### \_\_namedParameters?

#### callback?

`string`

#### format?

[`FeedFormat`](FeedFormat.md) = `"json"`

#### query?

[`QueryOptions`](../interfaces/QueryOptions.md)

## Returns

`URL`
