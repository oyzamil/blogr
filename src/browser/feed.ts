// Standalone "feed" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../feed.min.js">` gives you `Blogr.feed` —
// `new Blogr.feed(...)` — without pulling in any other module's code.
import { FeedModule } from "../modules/feed";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { feed: FeedModule });
