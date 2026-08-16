[**blogr**](../README.md)

***

[blogr](../README.md) / Cache

# Class: Cache

Defined in: [src/core/cache.ts:10](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L10)

A tiny in-memory cache keyed by request URL. Disabled by default —
call [Cache.enable](#enable) to turn it on.

## Constructors

### Constructor

> **new Cache**(): `Cache`

#### Returns

`Cache`

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [src/core/cache.ts:43](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L43)

##### Returns

`boolean`

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/core/cache.ts:37](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L37)

##### Returns

`number`

## Methods

### clear()

> **clear**(): `this`

Defined in: [src/core/cache.ts:29](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L29)

Clears every cached entry.

#### Returns

`this`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/core/cache.ts:34](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L34)

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### disable()

> **disable**(): `this`

Defined in: [src/core/cache.ts:23](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L23)

Disables caching (existing entries are kept, but bypassed until re-enabled).

#### Returns

`this`

***

### enable()

> **enable**(`options?`): `this`

Defined in: [src/core/cache.ts:16](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L16)

Enables caching. Optionally pass a TTL in milliseconds.

#### Parameters

##### options?

###### ttlMs?

`number`

#### Returns

`this`

***

### get()

> **get**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [src/core/cache.ts:47](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L47)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

#### Returns

`T` \| `undefined`

***

### has()

> **has**(`key`): `boolean`

Defined in: [src/core/cache.ts:40](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L40)

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### set()

> **set**\<`T`\>(`key`, `value`): `void`

Defined in: [src/core/cache.ts:58](https://github.com/oyzamil/blogr/blob/845af3c2124b40a9da233e5b4826fdf18f840840/src/core/cache.ts#L58)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`
