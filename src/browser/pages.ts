// Standalone "pages" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../pages.min.js">` gives you `Blogr.pages` —
// `new Blogr.pages(...)` — without pulling in any other module's code.
import { PagesModule } from "../modules/pages";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { pages: PagesModule });
