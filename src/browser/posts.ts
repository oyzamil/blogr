// Standalone "posts" CDN build. Loaded alone (no main script.js), this
// merges onto a shared `window.Blogr` namespace instead of its own global,
// so `<script src=".../posts.min.js">` gives you `Blogr.posts` —
// `new Blogr.posts(...)` — without pulling in any other module's code.
import { PostsModule } from "../modules/posts";

const g = globalThis as Record<string, unknown>;
g.Blogr = Object.assign((g.Blogr as object) ?? {}, { posts: PostsModule });
