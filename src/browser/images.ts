// Standalone "images" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../images.min.js">` gives you `Blogr.images` —
// `new Blogr.images(...)` — without pulling in any other module's code.
import { ImagesModule } from "../modules/images";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { images: ImagesModule });
