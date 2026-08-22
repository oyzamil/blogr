[**blogr**](../README.md)

***

[blogr](../README.md) / StatsModule

# Class: StatsModule

Defined in: [src/modules/stats.ts:14](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/stats.ts#L14)

Cheap aggregate counts for the blog (posts/pages/comments/labels totals).

## Constructors

### Constructor

> **new StatsModule**(`client`): `StatsModule`

Defined in: [src/modules/stats.ts:15](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/stats.ts#L15)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`StatsModule`

## Methods

### get()

> **get**(`requestOptions?`): `Promise`\<[`BlogStats`](../interfaces/BlogStats.md)\>

Defined in: [src/modules/stats.ts:17](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/stats.ts#L17)

#### Parameters

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`BlogStats`](../interfaces/BlogStats.md)\>
