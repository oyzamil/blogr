// Standalone "labels" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../labels.min.js">` gives you `Blogr.labels` —
// `new Blogr.labels(...)` — without pulling in any other module's code.
import { LabelsModule } from "../modules/labels";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { labels: LabelsModule });
