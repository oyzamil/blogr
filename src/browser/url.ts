// Standalone "url" CDN build. Load after client.js — this only patches
// the shared `Blogr` (== `Client`) prototype with a lazy `.url` accessor
// (see modules/url.ts's `registerClientModule` call); it doesn't define
// `window.Blogr` itself, so it throws (`__blogrCore is not defined`) if
// loaded before client.js.
import "../modules/url";
