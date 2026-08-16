[**blogr**](../README.md)

***

[blogr](../README.md) / buildUrl

# Type Alias: buildUrl

> **buildUrl** = (`path`, `base`, `__namedParameters`) => `URL`

Defined in: [src/core/http.ts:22](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/http.ts#L22)

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
