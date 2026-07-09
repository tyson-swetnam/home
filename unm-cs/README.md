# UNM CS faculty page

A single self-contained `index.html` for the UNM Computer Science faculty web
space. It is **not** part of the Zensical build — nothing in this directory is
published to tysonswetnam.com. Upload it to the CS department web space by hand.

## What it does

- Embeds **https://tysonswetnam.com** in a full-viewport `<iframe>`, so the
  browser address bar stays on the `cs.unm.edu` URL — visitors see the personal
  site with no visible redirect.
- Shows a brief branded splash while the frame loads (matches the site's
  Swiss/editorial style, UNM cherry accent, light + dark via
  `prefers-color-scheme`).
- If the site is unreachable, it swaps to a plain card listing:
  - https://tysonswetnam.com — personal website
  - https://carc.unm.edu — UNM Center for Advanced Research Computing

  Failure detection uses three signals, because browsers fire the iframe
  `load` event even for their own error pages: a `fetch` reachability probe
  (rejects on true network failure → card after a 2s grace), a `postMessage`
  handshake (`tls:alive`) that `docs/javascripts/landing.js` sends when the
  site detects it is framed (positive confirmation of a real load), and an
  8s belt-and-suspenders timer for a frame that never fires `load` at all.
- `rel="canonical"` points at `https://tysonswetnam.com/` so search engines
  index the real site rather than this shell.
- Deep links are supported via the hash: `…/~<user>/#/publications/` opens
  `https://tysonswetnam.com/publications/` inside the frame. Only paths on
  tysonswetnam.com are honored.
- Works without JavaScript (the iframe still renders; only the splash/fallback
  logic needs JS). A keyboard/screen-reader skip link jumps straight to
  tysonswetnam.com.

## Deploying

Copy the file into the web directory of the CS account (typically
`~/public_html/` served at `https://www.cs.unm.edu/~<username>/`):

```bash
scp unm-cs/index.html <username>@<cs-host>.cs.unm.edu:~/public_html/index.html
```

Make sure the directory and file are world-readable:

```bash
chmod 755 ~/public_html
chmod 644 ~/public_html/index.html
```

## Alternative: true HTTP redirect

If a plain redirect is ever preferred over the seamless embed (the address bar
*will* change to tysonswetnam.com), and the CS Apache config allows per-user
overrides, drop this in `~/public_html/.htaccess` instead:

```apache
Redirect 302 / https://tysonswetnam.com/
```

## Caveats

- Framing works because tysonswetnam.com is served by GitHub Pages, which sends
  no `X-Frame-Options` / `Content-Security-Policy: frame-ancestors` headers
  (and cannot — Pages doesn't allow custom headers). If framing were ever
  blocked by a header, the server would still be reachable, so visitors would
  see the browser's blocked-frame page rather than the fallback card — don't
  add such a header to the site.
- The handshake beacon ships with the site itself (`docs/javascripts/landing.js`),
  so it goes live the next time the main site deploys. The wrapper treats it
  as confirmation only — a cached or older build of the site without the
  beacon still displays fine and never falsely triggers the fallback.
- Links opened inside the frame stay inside the frame (address bar keeps
  showing the cs.unm.edu URL), which is the intended "seamless" behavior —
  but it also means individual pages aren't directly bookmarkable except via
  the `#/path/` deep-link form above.
- **External links** (nairrpilot.org, cyverse.org, …) cannot render inside the
  frame — most sites send `X-Frame-Options`/`frame-ancestors` and show
  "refused to connect". `landing.js` handles this: when the site detects it is
  framed, every external link opens in a new tab instead (direct visitors to
  tysonswetnam.com are unaffected). Like the beacon, this ships with the site
  itself, so it takes effect once the main site redeploys.
