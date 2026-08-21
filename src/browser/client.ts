// Standalone "client" CDN build — defines the base `window.Blogr` that every
// other standalone module script (`posts.js`, `comments.js`, ...) patches.
// Load this one first.
//
// `window.__blogrCore` holds the full `core/client` module namespace
// (`Client` + the `registerClientModule` helper) — not meant to be used
// directly. It exists purely so the *other* standalone module bundles,
// which treat `../core/client` as external and resolve it via this same
// global (see tsdown.config.ts), land on this exact `Client` class and
// helper rather than each carrying its own separately-identitied bundled
// copy. Without it, `registerClientModule`'s prototype patch (see
// core/client.ts) would patch the wrong `Client`, and `client.posts` etc.
// would silently stay undefined.
import * as ClientCore from "../core/client";

const g = globalThis as Record<string, unknown>;
g.__blogrCore = ClientCore;
g.Blogr = ClientCore.Client;
