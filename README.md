# Blogr

Modern, modular, fully-typed SDK for Blogger (Blogspot) public feed API. v0.0.3.

```ts
import { Blogr } from "blogr";

const blog = new Blogr("https://example.blogspot.com");
const { items } = await blog.posts({ limit: 10, label: "JavaScript" });
```

## Table of Contents

- [Install](#install)
- [Formats shipped in dist](#formats-shipped-in-dist)
- [Constructing a client](#constructing-a-client)
  - [Static factories](#static-factories)
- [Top-level `Blogr` methods](#top-level-blogr-methods)
- [Modules](#modules)
  - [posts](#posts-postsmodule)
  - [pages](#pages-pagesmodule)
  - [comments](#comments-commentsmodule)
  - [authors](#authors-authorsmodule)
  - [labels](#labels-labelsmodule)
  - [archive](#archive-archivemodule)
  - [images](#images-imagesmodule)
  - [feed](#feed-feedmodule)
  - [search](#search-searchmodule)
  - [stats](#stats-statsmodule)
  - [url](#url-urlmodule)
- [Shared listing options](#shared-listing-options)
- [`Pager<T>`](#pagert--result-of-every-listing-call)
- [Core data shapes](#core-data-shapes)
- [HTML parsing helpers](#html-parsing-helpers)
- [Caching](#caching)
- [Events](#events)
- [Plugins](#plugins)
- [Errors](#errors)
- [Low-level requests](#low-level-requests)
- [Recipes](#recipes)
  - [Blog homepage feed](#recipe-blog-homepage-feed)
  - [Infinite-scroll pagination](#recipe-infinite-scroll-pagination)
  - [Label filter nav](#recipe-label-filter-nav)
  - [Search box](#recipe-search-box)
  - [Comment thread w/ replies](#recipe-comment-thread-w-replies)
  - [Archive sidebar (year/month)](#recipe-archive-sidebar-yearmonth)
  - [Author bio box](#recipe-author-bio-box)
  - [RSS/Atom passthrough endpoint](#recipe-rssatom-passthrough-endpoint)
  - [React hook](#recipe-react-hook)
  - [Node script — static site export](#recipe-node-script--static-site-export)
  - [Retry + abort w/ AbortController](#recipe-retry--abort-w-abortcontroller)
  - [Custom cache backend swap-in](#recipe-custom-cache-backend-swap-in)
- [Full example](#full-example)

---

## Install

```
npm install blogr
```

CDN (browser, IIFE global `Blogr`):

```html
<script src="https://cdn.jsdelivr.net/npm/blogr/dist/blogr.min.js"></script>
<script>
  const blog = new Blogr("https://example.blogspot.com");
  blog.latest(5).then(posts => console.log(posts));
</script>
```

## Formats shipped in dist

Per module (e.g. `blogr`, `posts`, `comments`...), four builds:

- `<name>.js` / `<name>.min.js` — ESM (also `.esm.js` / `.esm.min.js` variants)
- `<name>.cjs` / `<name>.min.cjs` — CommonJS
- `blogr.js` (iife, unminified) / `blogr.min.js` (iife, minified) — browser global `Blogr`
- `.d.ts` / `.d.cts` — type decls for ESM / CJS resp.

Modular imports (tree-shake unused modules — importing `blogr/posts` alone only pulls in `PostsModule`, importing `blogr` pulls in everything):

```ts
import { PostsModule } from "blogr/posts";
import { CommentsModule } from "blogr/comments";
```

CommonJS:

```js
const { Blogr } = require("blogr");
const blog = new Blogr("https://example.blogspot.com");
```

Node ESM:

```js
import { Blogr } from "blogr";
```

---

## Constructing a client

```ts
new Blogr(urlOrId: string | URL, options?: ClientOptions)
```

`urlOrId` — blog's URL (custom domain or `*.blogspot.com`), or numeric Blogger blog id.

```ts
interface ClientOptions {
  /** Enable JSONP transport (browser-only). @default false */
  jsonp?: boolean;
}
```

Examples of valid constructor inputs:

```ts
new Blogr("https://example.blogspot.com");
new Blogr("https://www.myowndomain.com");           // custom domain blog
new Blogr("1234567890123456789");                   // numeric blog id
new Blogr("https://example.blogspot.com", { jsonp: true }); // browser, JSONP transport
```

### Static factories

```ts
Blogr.connect(urlOrId, options?)   // creates client, eagerly resolves/validates blog metadata
Blogr.fromBlogId(id, options?)     // from numeric Blogger blog id
Blogr.fromUrl(url, options?)       // from blog URL
Blogr.fromFeed(feedUrl, options?)  // from any Blogger feed URL, e.g.
                                    // https://example.blogspot.com/feeds/posts/default
                                    // https://www.blogger.com/feeds/1234567890/posts/default
```

```ts
// connect() eagerly resolves metadata — good when you want to fail fast on bad urls
const blog = await Blogr.connect("https://example.blogspot.com");

// fromBlogId() — when you only have the numeric id (e.g. stored in a DB)
const blogFromId = Blogr.fromBlogId("1234567890123456789");

// fromUrl() — plain constructor equivalent
const blogFromUrl = Blogr.fromUrl("https://example.blogspot.com");

// fromFeed() — when you already have a raw feed URL lying around
const blogFromFeed = Blogr.fromFeed(
  "https://example.blogspot.com/feeds/posts/default"
);
```

---

## Top-level `Blogr` methods

All top-level methods mirror underlying module methods (see modules below for options detail):

```ts
info(requestOptions?)                       // BlogInfo
links(requestOptions?)                      // Link[]
stats(requestOptions?)                      // BlogStats
authors(options?, requestOptions?)          // AuthorWithPostCount[]
posts(options?, requestOptions?)            // Pager<Post>
post(postId, options?, requestOptions?)     // Post | null
latest(options?, requestOptions?)           // Post[]
featured(requestOptions?)                   // Post | null
random(options?, requestOptions?)           // Post[]
pages(options?, requestOptions?)            // Pager<Post>
page(pageId, options?, requestOptions?)     // Post | null
comments(postIdOrOptions?, requestOptions?) // Pager<Comment>
comment(commentId, postId?, requestOptions?)// Comment | null
commenters(options?, requestOptions?)       // CommenterWithCount[]
labels(requestOptions?)                     // string[]
label(label, options?, requestOptions?)     // Pager<Post>
categories(requestOptions?)                 // string[], alias of labels()
labelCounts(options?, requestOptions?)      // LabelWithPostCount[]
search(input, requestOptions?)              // Pager<Post>
images(options?, requestOptions?)           // FoundImage[]
resolve(url)                                // Promise<string>
parse(raw)                                  // ParsedFeed
normalize(data)                             // Post | Comment | BlogInfo | null
htmlToText(input)                           // string
htmlToMarkdown(input)                       // string
extractImages(input)                        // string[]
extractLinks(input)                         // ExtractedLink[]
extractYouTube(input)                       // ExtractedYouTube[]
extractEmbeds(input)                        // ExtractedEmbed[]
thumbnail(input)                            // string | null
request(endpoint, requestOptions?)          // ParsedFeed
fetch<T>(url, requestOptions?)              // T (bypasses feed parsing)
use(plugin)                                 // installs plugin, returns this
on(event, listener) / off(event, listener)  // lifecycle events
```

Also exposed as public properties on the instance:

```ts
blog.url      // UrlModule    — raw feed URL builders, no requests
blog.feed     // FeedModule   — raw feed fetchers per wire format
blog.archive  // ArchiveModule
blog.cache    // Cache        — response cache, disabled by default
```

Quick tour of the top-level surface:

```ts
const blog = new Blogr("https://example.blogspot.com");

const info = await blog.info();
console.log(info.title, "—", info.subtitle);

const [link] = await blog.links();
console.log(link.rel, link.href);

const { posts, pages, comments, labels } = await blog.stats();
console.log(`${posts} posts / ${pages} pages / ${comments} comments / ${labels} labels`);

const home = await blog.latest(3);
home.forEach(p => console.log(p.title, p.url));

const catList = await blog.categories(); // same as blog.labels()
console.log(catList);

const resolved = await blog.resolve("/2024/01/some-post.html");
console.log(resolved); // absolute url against blog's own domain
```

---

## Modules

### `posts` (`PostsModule`)

```ts
posts.list(options?: PostsListOptions, requestOptions?): Promise<Pager<Post>>
posts.get(postId, options?: { summary?: boolean }, requestOptions?): Promise<Post | null>
posts.query(query, options?, requestOptions?): Promise<Pager<Post>>   // full-text search scoped to posts
posts.latest(options?: LatestOptions, requestOptions?): Promise<Post[]>
posts.featured(requestOptions?): Promise<Post | null>
posts.random(options?: RandomOptions, requestOptions?): Promise<Post[]>
```

Notes:

- `latest` — bare `number` shorthand for `{ limit: number }`, else object also filtering by `label`, `query`, date range, etc.
- `featured` — Blogger has no explicit pinned-post flag; returns first post in blog's default order (the pinned post, when set).
- `random` — bare `number` shorthand for `{ count: number }`.

```ts
interface PostsListOptions extends BaseListOptions {
  query?: string;              // maps to Blogger `q` param
  label?: string | string[];   // string[] = AND semantics, entry must carry every label
}
```

Examples:

```ts
// basic list
const { items } = await blog.posts.list({ limit: 20 });

// paginated by page number instead of startIndex
const page2 = await blog.posts.list({ page: 2, limit: 20 });

// filter by single label
const jsPosts = await blog.posts.list({ label: "JavaScript" });

// filter by multiple labels (AND)
const tutorials = await blog.posts.list({ label: ["JavaScript", "Tutorial"] });

// date-range query
const in2023 = await blog.posts.list({
  publishedMin: "2023-01-01T00:00:00Z",
  publishedMax: "2023-12-31T23:59:59Z",
  orderBy: "published",
});

// summary-only projection (lighter payload, no full content)
const summaries = await blog.posts.list({ summary: true, limit: 50 });

// get single post
const post = await blog.posts.get("1234567890123456789");
if (post) console.log(post.title, post.content);

// get single post, summary only
const lightPost = await blog.posts.get("1234567890123456789", { summary: true });

// full-text query scoped to posts
const { items: found } = await blog.posts.query("typescript generics");

// latest — bare number shorthand
const last5 = await blog.posts.latest(5);

// latest — object form with filters
const latestJs = await blog.posts.latest({ limit: 10, label: "JavaScript" });

// featured / pinned post
const pinned = await blog.posts.featured();

// random — bare number
const [oneRandom] = await blog.posts.random();

// random — object form
const randomFromLabel = await blog.posts.random({ count: 3, label: "Recipes" });
```

### `pages` (`PagesModule`)

```ts
pages.list(options?: PagesListOptions, requestOptions?): Promise<Pager<Post>>
pages.get(pageId, options?: { summary?: boolean }, requestOptions?): Promise<Post | null>
```

`PagesListOptions` = `BaseListOptions` (pages reuse the `Post` shape).

```ts
// list all static pages
const { items: allPages } = await blog.pages.list();

// paginate pages
const { items: firstTen } = await blog.pages.list({ limit: 10, page: 1 });

// fetch one page by id
const about = await blog.pages.get("9876543210987654321");
if (about) console.log(about.title, about.content);

// summary only
const aboutSummary = await blog.pages.get("9876543210987654321", { summary: true });
```

### `comments` (`CommentsModule`)

```ts
comments.list(options?: CommentsListOptions, requestOptions?): Promise<Pager<Comment>>
comments.get(commentId, postId?, options?: { maxScan?: number; scanPageSize?: number }, requestOptions?): Promise<Comment | null>
comments.commenters(options?: { postId?: string; sampleSize?: number }, requestOptions?): Promise<CommenterWithCount[]>
```

- `get` without `postId` scans blog-level comments feed (pages of `scanPageSize`, up to `maxScan`) since Blogger has no id-only comment lookup — pass `postId` when known for one direct request.
- `commenters` — no `sampleSize`: no `max-results` sent, walks every page until exhausted (counts every comment on the blog). Pass `sampleSize` to cap scan to one request.

```ts
interface CommenterWithCount extends Author {
  totalComments: number;
}
```

```ts
// all comments, blog-wide
const { items: allComments } = await blog.comments.list();

// comments for one post
const { items: postComments } = await blog.comments.list({ postId: "1234567890123456789" });

// paginate + sort
const recentComments = await blog.comments.list({ orderBy: "published", limit: 20 });

// fetch one comment — fast path, postId known
const c1 = await blog.comments.get("111222333", "1234567890123456789");

// fetch one comment — slow path, postId unknown (scans blog-level feed)
const c2 = await blog.comments.get("111222333", undefined, { maxScan: 500, scanPageSize: 100 });

// distinct commenters, whole blog, full scan (no sampleSize -> every comment counted)
const allCommenters = await blog.comments.commenters();

// distinct commenters, capped to one request of last 200 comments
const sampledCommenters = await blog.comments.commenters({ sampleSize: 200 });

// distinct commenters scoped to a single post
const postCommenters = await blog.comments.commenters({ postId: "1234567890123456789" });
```

### `authors` (`AuthorsModule`)

```ts
authors.list(options?: { sampleSize?: number }, requestOptions?): Promise<AuthorWithPostCount[]>
```

No dedicated authors endpoint on Blogger — aggregates authors seen across blog's posts. Default: no `max-results`, walks every page (one request per page of posts). Pass `sampleSize` to cap to a single request of that many most-recent posts.

```ts
interface AuthorWithPostCount extends Author {
  totalPosts: number;
  firstPostDate: string | null;
  lastPostDate: string | null;
  labels: string[];  // union of every label across this author's posts
}
```

```ts
// full scan — every author, whole blog
const allAuthors = await blog.authors.list();
allAuthors.forEach(a => console.log(a.name, a.totalPosts, "posts"));

// capped scan — last 100 posts only, cheaper for big blogs
const recentAuthors = await blog.authors.list({ sampleSize: 100 });

// sort by post count desc
const topAuthors = [...allAuthors].sort((a, b) => b.totalPosts - a.totalPosts);
```

### `labels` (`LabelsModule`)

```ts
labels.list(requestOptions?): Promise<string[]>
labels.counts(options?: { sampleSize?: number }, requestOptions?): Promise<LabelWithPostCount[]>
labels.get(label, options?: Omit<PostsListOptions, "label">, requestOptions?): Promise<Pager<Post>>
```

- `list()` — one cheap request, Blogger reports label set on any feed response, no counts.
- `counts()` — scans every post to tally per-label counts (one request per page); pass `sampleSize` to cap.

```ts
interface LabelWithPostCount {
  label: string;
  postCount: number;
}
```

```ts
// cheap: just the label names
const labelNames = await blog.labels.list();

// full scan: label names + post counts
const withCounts = await blog.labels.counts();
withCounts.forEach(l => console.log(l.label, l.postCount));

// capped scan
const cappedCounts = await blog.labels.counts({ sampleSize: 300 });

// posts under one label, paginated
const { items: recipePosts } = await blog.labels.get("Recipes", { limit: 15 });
```

### `archive` (`ArchiveModule`)

Year/month archive browsing. No dedicated Blogger endpoint — built on `publishedMin`/`publishedMax` range queries.

```ts
archive.year(year, options?: { limit?: number; page?: number }, requestOptions?): Promise<Pager<Post>>
archive.month(year, month, options?: { limit?: number; page?: number }, requestOptions?): Promise<Pager<Post>>
archive.years(requestOptions?): Promise<number[]>  // every year with ≥1 post, newest first
```

`month` is 1-based. `years()` locates newest/oldest post via `totalResults` + `startIndex` (no "list of years" endpoint exists).

```ts
// every post from 2023
const { items: y2023 } = await blog.archive.year(2023);

// every post from March 2023 (1-based month)
const { items: mar2023 } = await blog.archive.month(2023, 3);

// paginated archive browsing
const { items: y2023p2 } = await blog.archive.year(2023, { limit: 10, page: 2 });

// build a full archive tree
const years = await blog.archive.years();
for (const year of years) {
  const { totalResults } = await blog.archive.year(year, { limit: 1 });
  console.log(year, "→", totalResults, "posts");
}
```

### `images` (`ImagesModule`)

```ts
images.list(options?: { sampleSize?: number }, requestOptions?): Promise<FoundImage[]>
```

Every unique image found in post content, tagged with source post. Default: no `max-results`, scans every post via pagination. Pass `sampleSize` to cap.

```ts
interface FoundImage {
  url: string;
  postId: string;
  postUrl: string;
}
```

```ts
// full scan, whole blog
const allImages = await blog.images.list();

// capped to last 50 posts
const recentImages = await blog.images.list({ sampleSize: 50 });

// group by post
const byPost = new Map<string, string[]>();
for (const img of allImages) {
  const arr = byPost.get(img.postId) ?? [];
  arr.push(img.url);
  byPost.set(img.postId, arr);
}
```

### `feed` (`FeedModule`)

Raw feed fetchers, any wire format:

```ts
feed.json(options?: FeedOptions, requestOptions?): Promise<ParsedFeed>
feed.atom(options?: FeedOptions, requestOptions?): Promise<string>   // raw Atom XML
feed.rss(options?: FeedOptions, requestOptions?): Promise<string>    // raw RSS 2.0 XML
feed.jsonp(options?: FeedOptions, requestOptions?): Promise<ParsedFeed>  // browser-only, requires `jsonp: true` on client
```

```ts
interface FeedOptions extends BaseListOptions {
  type?: "posts" | "pages" | "comments";  // @default "posts"
}
```

```ts
// parsed JSON feed, posts (default)
const parsed = await blog.feed.json({ limit: 10 });

// parsed JSON feed, pages
const pagesFeed = await blog.feed.json({ type: "pages" });

// parsed JSON feed, comments
const commentsFeed = await blog.feed.json({ type: "comments", limit: 25 });

// raw Atom XML text — feed this straight into an <xml> viewer or RSS reader
const atomXml = await blog.feed.atom({ limit: 20 });

// raw RSS 2.0 XML text
const rssXml = await blog.feed.rss({ limit: 20 });

// JSONP (browser only, client must be constructed with { jsonp: true })
const jsonpBlog = new Blogr("https://example.blogspot.com", { jsonp: true });
const viaJsonp = await jsonpBlog.feed.jsonp({ limit: 10 });
```

### `search` (`SearchModule`)

```ts
search.run(input: string | SearchOptions, requestOptions?): Promise<Pager<Post>>
```

```ts
interface SearchOptions extends BaseListOptions {
  query: string;
  label?: string | string[];
}
```

```ts
// plain string query
const { items: hits } = await blog.search.run("docker compose tips");

// object form, query + label filter + pagination
const { items: scopedHits } = await blog.search.run({
  query: "docker",
  label: "DevOps",
  limit: 10,
  page: 1,
});

// same via top-level shortcut
const sameHits = await blog.search("docker compose tips");
```

### `stats` (`StatsModule`)

```ts
stats.get(requestOptions?): Promise<BlogStats>
```

```ts
interface BlogStats {
  posts: number;
  pages: number;
  comments: number;
  labels: number;
  lastPostDate: string | null;
}
```

```ts
const s = await blog.stats.get();
console.log(`${s.posts} posts, last published ${s.lastPostDate ?? "never"}`);
```

### `url` (`UrlModule`)

Builds raw feed URLs, no requests made:

```ts
url.posts(options?: UrlOptions): string
url.post(postId, options?: UrlOptions): string
url.pages(options?: UrlOptions): string
url.page(pageId, options?: UrlOptions): string
url.comments(postId?, options?: UrlOptions): string   // blog-wide, or scoped to postId
url.label(label: string | string[], options?: UrlOptions): string
url.search(query, options?: UrlOptions): string
```

```ts
interface UrlOptions {
  format?: FeedFormat;  // "json" | "atom" | "rss" | "jsonp", @default "json"
}
```

```ts
console.log(blog.url.posts());                          // json posts feed url
console.log(blog.url.posts({ format: "atom" }));         // atom posts feed url
console.log(blog.url.post("1234567890123456789"));       // single post entry url
console.log(blog.url.pages());                           // json pages feed url
console.log(blog.url.page("9876543210987654321"));       // single page entry url
console.log(blog.url.comments());                        // blog-wide comments feed url
console.log(blog.url.comments("1234567890123456789"));   // comments scoped to one post
console.log(blog.url.label("JavaScript"));                // single-label feed url
console.log(blog.url.label(["JavaScript", "Tutorial"]));   // multi-label feed url
console.log(blog.url.search("typescript"));                // search feed url

// hand a raw feed URL you built off to fetch/request directly
const raw = await blog.fetch(blog.url.posts({ format: "json" }));
```

---

## Shared listing options

```ts
interface BaseListOptions {
  page?: number;                    // 1-based, converted to startIndex via limit; ignored if startIndex set
  limit?: number | null;            // alias for `max-results`, @default 25; pass null to omit param entirely
  startIndex?: number;              // raw 1-based start index, takes precedence over page
  orderBy?: "published" | "updated";
  publishedMin?: Date | string;
  publishedMax?: Date | string;
  updatedMin?: Date | string;
  updatedMax?: Date | string;
  summary?: boolean;                // request lightweight "summary" projection
}
```

```ts
// omit max-results entirely, let Blogger apply its own default page size
await blog.posts.list({ limit: null });

// Date objects work same as ISO strings
await blog.posts.list({ publishedMin: new Date("2024-01-01"), publishedMax: new Date() });

// raw startIndex takes precedence over page
await blog.posts.list({ startIndex: 51, limit: 25 }); // items 51-75
```

## `Pager<T>` — result of every listing call

```ts
interface Pager<T> {
  readonly items: T[];
  readonly itemsPerPage: number | null;
  readonly startIndex: number | null;
  readonly totalResults: number | null;
  readonly selfUrl: string | null;
  readonly hasNext: boolean;
  readonly hasPrevious: boolean;
  next(options?: RequestOptions): Promise<Pager<T> | null>;
  previous(options?: RequestOptions): Promise<Pager<T> | null>;
}
```

```ts
const page1 = await blog.posts({ limit: 10 });
for (const post of page1.items) console.log(post.title);

console.log(page1.totalResults, page1.itemsPerPage, page1.startIndex);

const page2 = page1.hasNext ? await page1.next() : null;
const backToPage1 = page2 && page2.hasPrevious ? await page2.previous() : null;

// walk every page until exhausted
async function collectAll<T>(first: Pager<T>): Promise<T[]> {
  const out: T[] = [...first.items];
  let cur: Pager<T> | null = first;
  while (cur && cur.hasNext) {
    cur = await cur.next();
    if (cur) out.push(...cur.items);
  }
  return out;
}

const everyPost = await collectAll(await blog.posts({ limit: 50 }));
```

## Core data shapes

```ts
interface Author {
  name: string | null;
  url: string | null;
  id: string | null;         // parsed out of profile url, more stable than name
  email: string | null;      // Blogger masks as noreply@blogger.com almost always
  image: string | null;
  imageWidth: number | null;
  imageHeight: number | null;
}

interface Link { rel: string; href: string; type: string | null; title: string | null; }
interface Geo { box: string | null; featureName: string | null; point: string | null; }
interface Extended { class: string | null; time: string | null; removed: boolean; }
interface PostCommentInfo { feed: string | null; number: number | null; title: string | null; }

interface BlogInfo {
  id: string;
  title: string;
  subtitle: string | null;
  url: string;
  labels: string[];
  language: string | null;
  updated: string;
  author: Author;
  favicon: string | null;
  links: Link[];
}

interface Post {
  id: string;
  title: string;
  url: string;
  published: string;   // ISO
  updated: string;     // ISO
  labels: string[];
  author: Author;
  content: string | null;      // null when only summary requested
  summary: string | null;
  thumbnail: string | null;    // best-guess, extracted from content
  thumbnailAlt: string | null; // explicitly selected by Blogger
  comments: PostCommentInfo;
  geo: Geo;
  links: Link[];
}

interface Comment {
  id: string;
  title: string;
  url: string;
  published: string;
  updated: string;
  author: Author;
  content: string | null;
  summary: string | null;
  extended: Extended;
  post: { id: string; url: string };
  inReplyTo: string | null;  // parent comment id if reply, else null
  links: Link[];
}

interface ParsedFeed {
  blog: BlogInfo | null;
  posts: Post[] | null;
  comments: Comment[] | null;
  itemsPerPage: number | null;
  startIndex: number | null;
  totalResults: number | null;
  selfUrl: string | null;
  previousUrl: string | null;
  nextUrl: string | null;
  links: Link[];
}
```

Pages use the same `Post` shape.

```ts
// destructure a Post fully
function renderCard(post: Post) {
  return {
    title: post.title,
    url: post.url,
    date: new Date(post.published).toLocaleDateString(),
    labels: post.labels.join(", "),
    author: post.author.name ?? "Unknown",
    thumb: post.thumbnail ?? post.thumbnailAlt ?? "/placeholder.png",
    commentCount: post.comments.number ?? 0,
  };
}
```

---

## HTML parsing helpers

Standalone functions (also exposed as `blog.htmlToText` etc.), take `Post | string | null | undefined`:

```ts
htmlToText(input): string                 // strips tags, decodes entities, collapses whitespace
htmlToMarkdown(input): string              // best-effort HTML → Markdown (headings, bold/italic,
                                            // links, images, lists, blockquotes, inline/block code)
extractImages(input, includeThumbnail?): string[]   // every unique <img> src
extractLinks(input): ExtractedLink[]       // every <a href>, in document order: { url, text }
extractYouTube(input): ExtractedYouTube[]  // every unique YouTube video: { id, url }
extractEmbeds(input): ExtractedEmbed[]     // every non-YouTube <iframe>: { src, provider }
thumbnail(input): string | null            // Blogger's own pick, else first extracted image
```

```ts
const post = await blog.post("1234567890123456789");

// plain text (good for meta descriptions, previews)
const plain = blog.htmlToText(post);

// markdown (good for feeding into a static-site generator)
const md = blog.htmlToMarkdown(post);

// works on raw HTML strings too, not just Post objects
const md2 = blog.htmlToMarkdown("<h1>Hi</h1><p>Some <b>bold</b> text.</p>");

// every image url in the post body
const imgs = blog.extractImages(post);

// include the Blogger-selected thumbnail too
const imgsWithThumb = blog.extractImages(post, /* includeThumbnail */ true);

// every link
const links = blog.extractLinks(post);
links.forEach(l => console.log(l.text, "->", l.url));

// embedded YouTube videos
const videos = blog.extractYouTube(post);
videos.forEach(v => console.log(`https://youtu.be/${v.id}`));

// other iframe embeds (Spotify, Vimeo, Maps, forms...)
const embeds = blog.extractEmbeds(post);
embeds.forEach(e => console.log(e.provider, e.src));

// best thumbnail, with graceful fallback
const thumb = blog.thumbnail(post) ?? "/default-cover.jpg";
```

Standalone import (without a client instance):

```ts
import { htmlToMarkdown, extractImages, thumbnail } from "blogr";

const md = htmlToMarkdown("<p>Hello <em>world</em></p>");
```

---

## Caching

`blog.cache` — in-memory, keyed by request URL, disabled by default.

```ts
blog.cache.enable({ ttlMs: 60_000 });
blog.cache.disable();   // existing entries kept, bypassed until re-enabled
blog.cache.clear();
blog.cache.has(key);
blog.cache.get<T>(key);
blog.cache.set<T>(key, value);
blog.cache.size;
blog.cache.isEnabled;
```

```ts
// enable a 1-minute cache
blog.cache.enable({ ttlMs: 60_000 });

const first = await blog.posts({ limit: 10 });  // hits network
const second = await blog.posts({ limit: 10 }); // served from cache, same url

console.log(blog.cache.size, blog.cache.isEnabled);

// manually seed/read cache entries
blog.cache.set("custom-key", { hello: "world" });
const val = blog.cache.get<{ hello: string }>("custom-key");

// temporarily bypass without losing entries
blog.cache.disable();
const fresh = await blog.posts({ limit: 10 }); // network again
blog.cache.enable(); // re-enable, old entries still there (may be stale)

blog.cache.clear(); // wipe everything
```

---

## Events

```ts
blog.on("request", ({ url, method }) => { /* fired right before a request */ });
blog.on("response", ({ url, status, durationMs }) => { /* fired after successful request */ });
blog.on("error", ({ url, error }) => { /* fired when a request/parse step fails */ });
blog.off("request", listener);
```

```ts
// simple request logger
const logRequest = ({ url, method }: { url: string; method: string }) =>
  console.log(`[blogr] ${method} ${url}`);
blog.on("request", logRequest);

// timing / perf monitor
blog.on("response", ({ url, status, durationMs }) => {
  console.log(`[blogr] ${status} ${url} in ${durationMs}ms`);
});

// central error reporting
blog.on("error", ({ url, error }) => {
  console.error("[blogr] request failed", url, error);
  // report(error);
});

// unsubscribe later
blog.off("request", logRequest);
```

---

## Plugins

```ts
type BloggerPlugin = ((blog: Blogr) => void) | { install: (blog: Blogr) => void };
```

```ts
// function-style plugin
const requestLogger = (blog: Blogr) => {
  blog.on("request", ({ url }) => console.log("→", url));
};
blog.use(requestLogger);

// object-style plugin (Vue-style install method)
const analyticsPlugin = {
  install(blog: Blogr) {
    blog.on("response", ({ url, durationMs }) => {
      // send to analytics
    });
  },
};
blog.use(analyticsPlugin);

// use() returns `this`, so it's chainable
blog
  .use(requestLogger)
  .use(analyticsPlugin);

// plugin factory pattern, for configurable plugins
function withRetryLogging(prefix: string) {
  return (blog: Blogr) => {
    blog.on("error", ({ url, error }) => {
      console.warn(`${prefix} failed: ${url}`, error);
    });
  };
}
blog.use(withRetryLogging("[my-app]"));
```

---

## Errors

```ts
class BloggerError extends Error {}
class BloggerRequestError extends BloggerError {
  readonly url: string;
  readonly status: number | null;   // network/HTTP failure or non-2xx status
}
class BloggerValidationError extends BloggerError {}  // bad constructor/method args
```

```ts
import { BloggerError, BloggerRequestError, BloggerValidationError } from "blogr";

try {
  await blog.post("does-not-exist");
} catch (err) {
  if (err instanceof BloggerRequestError) {
    console.error("request failed:", err.status, err.url);
  } else if (err instanceof BloggerValidationError) {
    console.error("bad input:", err.message);
  } else if (err instanceof BloggerError) {
    console.error("blogr error:", err.message);
  } else {
    throw err; // not ours, rethrow
  }
}

// wrap a batch of calls, collect failures without stopping
async function safeAll<T>(promises: Promise<T>[]) {
  const results = await Promise.allSettled(promises);
  const ok = results.filter(r => r.status === "fulfilled").map(r => (r as any).value as T);
  const failed = results.filter(r => r.status === "rejected").map(r => (r as any).reason);
  return { ok, failed };
}
```

---

## Low-level requests

```ts
blog.request(endpoint: string | URL, requestOptions?): Promise<ParsedFeed>   // feed-relative endpoint or absolute URL, parsed
blog.fetch<T>(url: string | URL, requestOptions?): Promise<T>               // arbitrary URL, raw JSON, bypasses feed parsing
blog.parse(raw: unknown): ParsedFeed        // parse raw Blogger feed JSON (accepts { feed: { entry } } or { entry })
blog.normalize(data: unknown): Post | Comment | BlogInfo | null   // normalize single raw entry
```

`RequestOptions` (accepted by every fetching method):

```ts
interface RequestOptions {
  params?: QueryOptions;
  format?: FeedFormat;      // "json" | "atom" | "rss" | "jsonp"
  base?: string | URL;      // override resolved base URL for this one request
  signal?: AbortSignal;
}
```

```ts
// hit a feed-relative endpoint directly, get it parsed
const parsed = await blog.request("/feeds/posts/default", {
  params: { limit: 10, orderBy: "published" },
});

// override base url for one call (e.g. staging blog with same feed shape)
const staged = await blog.request("/feeds/posts/default", {
  base: "https://staging.example.blogspot.com",
});

// arbitrary url, raw untouched JSON (skip feed normalization)
const raw = await blog.fetch<{ feed: unknown }>(blog.url.posts());

// parse raw JSON you fetched yourself (e.g. via your own http client)
const ownFetchResult = await fetch(blog.url.posts()).then(r => r.json());
const parsedFeed = blog.parse(ownFetchResult);

// normalize a single raw entry object (e.g. one item plucked out of a bigger payload)
const oneEntry = (ownFetchResult as any).feed.entry[0];
const normalized = blog.normalize(oneEntry); // Post | Comment | BlogInfo | null

// abort a slow request
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);
try {
  await blog.request("/feeds/posts/default", { signal: controller.signal });
} catch (err) {
  console.log("aborted or failed", err);
}
```

---

## Recipes

### Recipe: blog homepage feed

```ts
async function homepage(blog: Blogr) {
  const [info, latest, popularLabels] = await Promise.all([
    blog.info(),
    blog.latest(6),
    blog.labelCounts({ sampleSize: 200 }),
  ]);

  return {
    title: info.title,
    subtitle: info.subtitle,
    posts: latest.map(p => ({
      title: p.title,
      url: p.url,
      thumb: blog.thumbnail(p),
      excerpt: blog.htmlToText(p.summary ?? p.content ?? "").slice(0, 160),
    })),
    topLabels: popularLabels.sort((a, b) => b.postCount - a.postCount).slice(0, 10),
  };
}
```

### Recipe: infinite-scroll pagination

```ts
class PostFeed {
  private pager: Pager<Post> | null = null;

  constructor(private blog: Blogr, private pageSize = 12) {}

  async first() {
    this.pager = await this.blog.posts({ limit: this.pageSize });
    return this.pager.items;
  }

  async more() {
    if (!this.pager || !this.pager.hasNext) return [];
    this.pager = await this.pager.next();
    return this.pager?.items ?? [];
  }

  get hasMore() {
    return this.pager?.hasNext ?? false;
  }
}

const feed = new PostFeed(blog);
const firstBatch = await feed.first();
// on scroll-to-bottom:
const nextBatch = await feed.more();
```

### Recipe: label filter nav

```ts
async function buildLabelNav(blog: Blogr) {
  const labels = await blog.labels(); // cheap, one request
  return labels.map(label => ({
    label,
    url: blog.url.label(label),
  }));
}

async function postsForLabel(blog: Blogr, label: string, page = 1) {
  return blog.label(label, { page, limit: 12 });
}
```

### Recipe: search box

```ts
async function search(blog: Blogr, query: string, page = 1) {
  if (!query.trim()) return { items: [] as Post[], totalResults: 0 };
  const result = await blog.search({ query, limit: 10, page });
  return { items: result.items, totalResults: result.totalResults ?? 0 };
}
```

### Recipe: comment thread w/ replies

```ts
interface ThreadedComment extends Comment {
  replies: ThreadedComment[];
}

async function threadedComments(blog: Blogr, postId: string): Promise<ThreadedComment[]> {
  const { items } = await blog.comments({ postId, limit: 100, orderBy: "published" });

  const byId = new Map<string, ThreadedComment>();
  items.forEach(c => byId.set(c.id, { ...c, replies: [] }));

  const roots: ThreadedComment[] = [];
  for (const c of byId.values()) {
    if (c.inReplyTo && byId.has(c.inReplyTo)) {
      byId.get(c.inReplyTo)!.replies.push(c);
    } else {
      roots.push(c);
    }
  }
  return roots;
}
```

### Recipe: archive sidebar (year/month)

```ts
async function archiveTree(blog: Blogr) {
  const years = await blog.archive.years();
  const tree: Record<number, number> = {};

  for (const year of years) {
    const { totalResults } = await blog.archive.year(year, { limit: 1 });
    tree[year] = totalResults ?? 0;
  }
  return tree; // { 2024: 42, 2023: 87, ... }
}

async function monthBreakdown(blog: Blogr, year: number) {
  const months = await Promise.all(
    Array.from({ length: 12 }, (_, i) => i + 1).map(async month => {
      const { totalResults } = await blog.archive.month(year, month, { limit: 1 });
      return { month, count: totalResults ?? 0 };
    })
  );
  return months.filter(m => m.count > 0);
}
```

### Recipe: author bio box

```ts
async function authorBio(blog: Blogr, authorName: string) {
  const authors = await blog.authors({ sampleSize: 300 });
  const match = authors.find(a => a.name === authorName);
  if (!match) return null;

  return {
    name: match.name,
    avatar: match.image,
    totalPosts: match.totalPosts,
    firstPost: match.firstPostDate,
    lastPost: match.lastPostDate,
    labels: match.labels,
  };
}
```

### Recipe: RSS/Atom passthrough endpoint

```ts
// e.g. inside an Express/Next.js API route
async function rssRoute(blog: Blogr) {
  const xml = await blog.feed.rss({ limit: 20 });
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

async function atomRoute(blog: Blogr) {
  const xml = await blog.feed.atom({ limit: 20 });
  return new Response(xml, {
    headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
  });
}
```

### Recipe: React hook

```tsx
import { useEffect, useState } from "react";
import { Blogr, Post } from "blogr";

const blog = new Blogr("https://example.blogspot.com");
blog.cache.enable({ ttlMs: 60_000 });

function useLatestPosts(count = 5) {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let cancelled = false;
    blog.latest(count)
      .then(items => { if (!cancelled) setPosts(items); })
      .catch(err => { if (!cancelled) setError(err); });
    return () => { cancelled = true; };
  }, [count]);

  return { posts, error };
}

function LatestPosts() {
  const { posts, error } = useLatestPosts(5);
  if (error) return <p>Failed to load posts.</p>;
  if (!posts) return <p>Loading…</p>;
  return (
    <ul>
      {posts.map(p => (
        <li key={p.id}><a href={p.url}>{p.title}</a></li>
      ))}
    </ul>
  );
}
```

### Recipe: Node script — static site export

```ts
import { writeFile, mkdir } from "node:fs/promises";
import { Blogr } from "blogr";

async function exportBlog(blogUrl: string, outDir: string) {
  const blog = await Blogr.connect(blogUrl);
  await mkdir(outDir, { recursive: true });

  let pager = await blog.posts({ limit: 50 });
  let all = [...pager.items];
  while (pager.hasNext) {
    pager = (await pager.next())!;
    all.push(...pager.items);
  }

  for (const post of all) {
    const md = blog.htmlToMarkdown(post);
    const frontmatter = [
      "---",
      `title: "${post.title.replace(/"/g, '\\"')}"`,
      `date: ${post.published}`,
      `labels: [${post.labels.map(l => `"${l}"`).join(", ")}]`,
      "---",
      "",
    ].join("\n");
    await writeFile(`${outDir}/${post.id}.md`, frontmatter + md, "utf8");
  }

  console.log(`exported ${all.length} posts to ${outDir}`);
}

exportBlog("https://example.blogspot.com", "./out");
```

### Recipe: retry + abort w/ AbortController

```ts
async function withTimeout<T>(
  fn: (signal: AbortSignal) => Promise<T>,
  ms: number
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fn(controller.signal);
  } finally {
    clearTimeout(timer);
  }
}

async function fetchWithRetry(blog: Blogr, tries = 3) {
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      return await withTimeout(
        signal => blog.posts({ limit: 10 }, { signal }),
        4000
      );
    } catch (err) {
      if (attempt === tries) throw err;
      await new Promise(r => setTimeout(r, attempt * 500)); // backoff
    }
  }
  throw new Error("unreachable");
}
```

### Recipe: custom cache backend swap-in

Built-in `Cache` is in-memory only. To persist across process restarts (e.g. Redis, filesystem), bypass it and wrap calls yourself:

```ts
interface KVStore {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ttlMs: number): Promise<void>;
}

function cachedPosts(blog: Blogr, store: KVStore, ttlMs = 60_000) {
  return async (options?: Parameters<Blogr["posts"]>[0]) => {
    const key = `posts:${JSON.stringify(options ?? {})}`;
    const hit = await store.get(key);
    if (hit) return JSON.parse(hit);

    const fresh = await blog.posts(options);
    await store.set(key, JSON.stringify(fresh), ttlMs);
    return fresh;
  };
}
```

---

## Full example

```ts
import { Blogr, BloggerRequestError } from "blogr";

const blog = await Blogr.connect("https://example.blogspot.com");

const info = await blog.info();
console.log(info.title, info.subtitle);

const { items: recent } = await blog.posts({ limit: 5, orderBy: "published" });

const jsPosts = await blog.label("JavaScript", { limit: 10 });

const results = await blog.search("typescript tips");

const stats = await blog.stats();
console.log(`${stats.posts} posts, ${stats.comments} comments`);

const authors = await blog.authors({ sampleSize: 100 });

blog.cache.enable({ ttlMs: 30_000 });
blog.on("request", ({ url }) => console.log("→", url));
blog.on("error", ({ url, error }) => console.error("blogr error:", url, error));

try {
  const missing = await blog.post("0000000000000000000");
  console.log(missing); // null, no throw for a valid-but-nonexistent id
} catch (err) {
  if (err instanceof BloggerRequestError) {
    console.error("network/http failure:", err.status, err.url);
  }
}

blog.use(b => {
  b.on("response", ({ url, status, durationMs }) => {
    if (durationMs > 1000) console.warn(`slow request: ${url} took ${durationMs}ms (${status})`);
  });
});
```
