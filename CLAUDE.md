# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for T.L. Swetnam (tysonswetnam.com) - a Zensical static site deployed to GitHub Pages.

## Architecture

- Content in `docs/` (markdown files, assets, blog posts)
- Custom theme overrides in `material/overrides/` extend the base theme — `main.html` renders the global editorial topbar, `home.html` is the landing page, `publications.html` is the publication portfolio page
- Configuration in `zensical.toml` defines navigation, theme palette, markdown extensions, and features
- Global JS in `docs/javascripts/landing.js` (loaded once from `main.html`, subscribes to Material's `document$` so it runs on every instant-nav event; dispatches into per-page inits gated by sentinel DOM elements)
- Editorial design tokens + Material chrome overrides in `docs/stylesheets/extra.css`
- **Note**: Blog functionality is not yet available in Zensical (as of May 2026), so the `/blog/` index is a hand-written listing in `docs/blog/index.md` and posts in `docs/blog/posts/` are served as plain markdown pages without blog-specific features (pagination, archives, post metadata)

## Development Commands

```bash
# Install Python deps
pip install -r requirements.txt

# Serve locally with hot reload
zensical serve

# Build static site (output to ./site)
zensical build
```

## Deployment

GitHub Actions workflow (`.github/workflows/publish-docs.yml`) runs on push to `main`:

1. Builds the Zensical site with Python 3.12
2. Uploads `site/` as the Pages artifact and deploys it

GitHub Pages is configured to use **GitHub Actions** as the source (not "Deploy from a branch").

## Configuration Notes

- **Python Version**: CI uses Python 3.12; local development should match
- **Configuration File**: `zensical.toml` uses TOML format (not YAML) — structured under `[project]` scope
- **Theme Variant**: Using `modern` variant (default)
- **Palette**: Light/dark schemes with custom token bridges in `extra.css` — `tls-light` / `default` / `home` light, `tls-dark` / `slate` dark
- **Editorial topbar**: rendered globally from `material/overrides/main.html` via `{% block header %}` (after Material's `md-header` via `super()`); Material's `md-header` and `md-tabs` are hidden by CSS so only the custom topbar shows
- **Markdown Extensions**: Includes PyMdown extensions for admonitions, code highlighting, emoji, tabs, and Mermaid diagrams
- **Navigation Features**: Instant loading, tabs (sticky), tracking, breadcrumbs (`navigation.path`), prev/next (`navigation.footer`), `toc.follow`, `toc.integrate`, search (with suggestions/highlighting)
- **Custom Styling**: `docs/stylesheets/extra.css` for site-wide tokens, typography, and Material chrome overrides
- **Custom JS**: `docs/javascripts/landing.js` loaded via `<script src=>` from `main.html` (Zensical's `extra_javascript` directive doesn't reach the rendered output in this version, same as `extra_css` — both are linked directly from the template)
