// Standalone "archive" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../archive.min.js">` gives you `Blogr.archive` —
// `new Blogr.archive(...)` — without pulling in any other module's code.
import { ArchiveModule } from "../modules/archive";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { archive: ArchiveModule });
