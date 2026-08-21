// Standalone "search" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../search.min.js">` gives you `Blogr.search` —
// `new Blogr.search(...)` — without pulling in any other module's code.
import { SearchModule } from "../modules/search";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { search: SearchModule });
