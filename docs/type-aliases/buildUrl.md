[**blogr**](../README.md)

***

[blogr](../README.md) / buildUrl

# Type Alias: buildUrl

> **buildUrl** = (`path`, `base`, `__namedParameters`) => `URL`

Defined in: [src/core/http.ts:22](https://github.com/oyzamil/blogr/blob/a9e99998556ac063e208b9a035393cc72f8e2d30/src/core/http.ts#L22)

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
