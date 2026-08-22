[**blogr**](../README.md)

***

[blogr](../README.md) / Pager

# Interface: Pager\<T\>

Defined in: [src/types/options.ts:87](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L87)

Result of any listing call — a page of items plus pagination helpers.

## Type Parameters

### T

`T`

## Properties

### hasNext

> `readonly` **hasNext**: `boolean`

Defined in: [src/types/options.ts:99](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L99)

Whether a [Pager.next](#next) page is available.

***

### hasPrevious

> `readonly` **hasPrevious**: `boolean`

Defined in: [src/types/options.ts:101](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L101)

Whether a [Pager.previous](#previous) page is available.

***

### items

> `readonly` **items**: `T`[]

Defined in: [src/types/options.ts:89](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L89)

Items on the current page.

***

### itemsPerPage

> `readonly` **itemsPerPage**: `number` \| `null`

Defined in: [src/types/options.ts:91](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L91)

Items requested per page (mirrors `limit`), or `null`.

***

### selfUrl

> `readonly` **selfUrl**: `string` \| `null`

Defined in: [src/types/options.ts:97](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L97)

URL of the current page's feed request.

***

### startIndex

> `readonly` **startIndex**: `number` \| `null`

Defined in: [src/types/options.ts:93](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L93)

1-based index of the first item on this page, or `null`.

***

### totalResults

> `readonly` **totalResults**: `number` \| `null`

Defined in: [src/types/options.ts:95](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L95)

Total number of items available across all pages, or `null`.

## Methods

### next()

> **next**(`options?`): `Promise`\<`Pager`\<`T`\> \| `null`\>

Defined in: [src/types/options.ts:103](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L103)

Fetches the next page, or `null` if there isn't one.

#### Parameters

##### options?

[`RequestOptionsInterface`](RequestOptionsInterface.md)

#### Returns

`Promise`\<`Pager`\<`T`\> \| `null`\>

***

### previous()

> **previous**(`options?`): `Promise`\<`Pager`\<`T`\> \| `null`\>

Defined in: [src/types/options.ts:105](https://github.com/oyzamil/blogr/blob/26e336356e0e8fab04e24df69bbc5904fdff9553/src/types/options.ts#L105)

Fetches the previous page, or `null` if there isn't one.

#### Parameters

##### options?

[`RequestOptionsInterface`](RequestOptionsInterface.md)

#### Returns

`Promise`\<`Pager`\<`T`\> \| `null`\>
