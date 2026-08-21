// Standalone "feed" CDN build. Load after client.js — this only patches
// the shared `Blogr` (== `Client`) prototype with a lazy `.feed` accessor
// (see modules/feed.ts's `registerClientModule` call); it doesn't define
// `window.Blogr` itself, so it throws (`__blogrCore is not defined`) if
// loaded before client.js.
import "../modules/feed";
