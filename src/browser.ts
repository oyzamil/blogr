// Entry point for the full "everything" IIFE (global `Blogr`) CDN build.
// `Blogr` is `Client` itself (see core/client.ts's `registerClientModule`)
// — importing every module here for its registration side effect means a
// `new Blogr(url)` from this one script already has every lazy accessor
// (`.posts`, `.comments`, `.authors`, ...) wired up, memoized on first
// access. No separate `Blogr.posts`/`Blogr.client` namespace needed.
import { Client } from "./core/client";
import "./modules/archive";
import "./modules/authors";
import "./modules/comments";
import "./modules/feed";
import "./modules/images";
import "./modules/labels";
import "./modules/pages";
import "./modules/posts";
import "./modules/search";
import "./modules/stats";
import "./modules/url";

export { Client as default };
