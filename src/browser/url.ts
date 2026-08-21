// Standalone "url" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../url.min.js">` gives you `Blogr.url` —
// `new Blogr.url(...)` — without pulling in any other module's code.
import { UrlModule } from "../modules/url";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { url: UrlModule });
