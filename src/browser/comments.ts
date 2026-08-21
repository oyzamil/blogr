// Standalone "comments" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../comments.min.js">` gives you `Blogr.comments` —
// `new Blogr.comments(...)` — without pulling in any other module's code.
import { CommentsModule } from "../modules/comments";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { comments: CommentsModule });
