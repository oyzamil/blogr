[**blogr**](../README.md)

***

[blogr](../README.md) / LabelsModule

# Class: LabelsModule

Defined in: [src/modules/labels.ts:18](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/labels.ts#L18)

Methods for discovering and filtering by labels (Blogger's "categories").

## Constructors

### Constructor

> **new LabelsModule**(`client`, `posts`): `LabelsModule`

Defined in: [src/modules/labels.ts:19](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/labels.ts#L19)

#### Parameters

##### client

[`Client`](Client.md)

##### posts

[`PostsModule`](PostsModule.md)

#### Returns

`LabelsModule`

## Methods

### counts()

> **counts**(`options?`, `requestOptions?`): `Promise`\<[`LabelWithPostCount`](../interfaces/LabelWithPostCount.md)[]\>

Defined in: [src/modules/labels.ts:42](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/labels.ts#L42)

Returns every label with a post count.

`list()` alone is one cheap request (Blogger reports the label set
on any feed response, count-free) — this instead scans every post in
the blog to tally how many carry each label, so it costs one request
per page of posts. Pass `sampleSize` to cap the scan to a single
request of that many most-recent posts instead.

#### Parameters

##### options?

###### sampleSize?

`number`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`LabelWithPostCount`](../interfaces/LabelWithPostCount.md)[]\>

***

### get()

> **get**(`label`, `options?`, `requestOptions?`): `Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

Defined in: [src/modules/labels.ts:74](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/labels.ts#L74)

Lists posts carrying `label`.

#### Parameters

##### label

`string`

##### options?

`Omit`\<[`PostsListOptions`](../interfaces/PostsListOptions.md), `"label"`\> = `{}`

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<[`Pager`](../interfaces/Pager.md)\<[`Post`](../interfaces/Post.md)\>\>

***

### list()

> **list**(`requestOptions?`): `Promise`\<`string`[]\>

Defined in: [src/modules/labels.ts:25](https://github.com/oyzamil/blogr/blob/90b67734d29aec0c2b15d3323a9fe2e31e1ba2f6/src/modules/labels.ts#L25)

Returns every label currently known to the blog.

#### Parameters

##### requestOptions?

[`RequestOptionsInterface`](../interfaces/RequestOptionsInterface.md) = `{}`

#### Returns

`Promise`\<`string`[]\>
