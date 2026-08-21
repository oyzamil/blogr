// Standalone "stats" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../stats.min.js">` gives you `Blogr.stats` —
// `new Blogr.stats(...)` — without pulling in any other module's code.
import { StatsModule } from "../modules/stats";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { stats: StatsModule });
