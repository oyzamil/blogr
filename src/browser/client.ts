// Standalone "client" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../client.min.js">` gives you `Blogr.client` —
// `new Blogr.client(...)` — without pulling in any other module's code.
import { Client } from "../core/client";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { client: Client });
