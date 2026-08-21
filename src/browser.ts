// Entry point for the full "everything" IIFE (global `Blogr`) CDN build.
// `Blogr` here is the SAME public wrapper class shipped in blogr.esm.js /
// blogr.cjs (see ./blogger.ts) — so `new Blogr(url)` from this one script
// gets the exact same shortcut methods as npm users: `.info()`, `.posts()`,
// `.stats()`, `.label()`, `.search()`, `.use()`, `.on()`/`.off()`,
// `.request()`/`.fetch()`, the html helpers, the static factories
// (`Blogr.connect()`, `.fromBlogId()`, `.fromUrl()`, `.fromFeed()`), etc.
// One call style everywhere, npm or CDN.
//
// NOTE: this intentionally does NOT use the bare `Client` +
// `registerClientModule` lazy-getter pattern anymore. That pattern still
// powers the separate standalone per-module CDN scripts (client.js,
// posts.js, comments.js, ...) built from src/browser/*.ts — those exist so
// someone can load only `client.js` + `posts.js` and skip the rest. This
// "everything" bundle has no reason to use that pattern since it already
// includes every module, so it uses the same full-featured `Blogr` wrapper
// as the npm build instead, for one consistent API surface.
import { Blogr } from "./blogger";

export { Blogr as default };
