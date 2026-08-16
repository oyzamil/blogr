[**blogr**](../README.md)

***

[blogr](../README.md) / BloggerEventMap

# Interface: BloggerEventMap

Defined in: [src/core/events.ts:2](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/events.ts#L2)

Payloads for each event emitted by a [Blogr](../classes/Blogr.md) instance.

## Properties

### error

> **error**: `object`

Defined in: [src/core/events.ts:8](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/events.ts#L8)

Fired when a request or parsing step fails.

#### error

> **error**: `unknown`

#### url

> **url**: `string` \| `null`

***

### request

> **request**: `object`

Defined in: [src/core/events.ts:4](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/events.ts#L4)

Fired right before a network request is made.

#### method

> **method**: `string`

#### url

> **url**: `string`

***

### response

> **response**: `object`

Defined in: [src/core/events.ts:6](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/events.ts#L6)

Fired after a network request completes successfully.

#### durationMs

> **durationMs**: `number`

#### status

> **status**: `number`

#### url

> **url**: `string`
