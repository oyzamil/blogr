// Standalone "authors" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../authors.min.js">` gives you `Blogr.authors` —
// `new Blogr.authors(...)` — without pulling in any other module's code.
import { AuthorsModule } from "../modules/authors";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { authors: AuthorsModule });
