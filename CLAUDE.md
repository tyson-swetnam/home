# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for T.L. Swetnam (tysonswetnam.com) - a hybrid Zensical + React application deployed to GitHub Pages.

## Architecture

**Dual Build System**: The site combines Zensical (modern static site generator by Material for MkDocs team) for content with a standalone React widget for LLM chat functionality.

- **Zensical Layer**:
  - Content in `docs/` (markdown files, assets)
  - Custom theme overrides in `material/overrides/` extend the base theme
  - Configuration in `zensical.toml` defines navigation, theme palette, markdown extensions, and features
  - **Note**: Blog functionality is not yet available in Zensical (as of January 2026), so blog posts in `docs/blog/` are served as static pages without blog features

- **React Widget Layer**:
  - Source in `src/` (React components with `main.jsx` entry point)
  - Built as ES module via Vite to `docs/assets/react/`
  - Vite config (`vite.config.js`) builds as library with external dependencies bundled
  - Injected into Zensical via `material/overrides/main.html` template
  - Connects to CyVerse Verde API (`https://llm-api.cyverse.ai/v1`) using `gemma-3-12b-it` model

**Integration Point**: The `main.html` override loads the compiled React widget (`llm-widget.js` and `llm-widget.css`) as a module script, allowing the React component to mount within the Zensical-rendered pages.

## Development Commands

### Full Site Development
```bash
# Install all dependencies
pip install -r requirements.txt
npm install

# Build React widget first, then serve Zensical with hot reload
npm run build
zensical serve
```

### React Widget Only
```bash
# Development server for React widget (no Zensical)
npm run dev

# Production build (outputs to docs/assets/react/)
npm run build
```

### Zensical Only
```bash
# Serve site locally with hot reload
zensical serve

# Build static site
zensical build --output-dir site

# Preview production build
zensical serve --output-dir site
```

## Deployment

GitHub Actions workflow (`.github/workflows/publish-docs.yml`) runs on push to `main`:

1. Builds React widget with `npm run build` (Node.js 18)
2. Builds Zensical site with compiled React assets (Python 3.12)
3. Deploys combined output to GitHub Pages

**Critical Environment Variable**: `VITE_CYVERSE_API_KEY` (secret) must be set in GitHub Actions for React widget API authentication.

## Configuration Notes

- **Python Version**: CI uses Python 3.12; local development should match
- **Configuration File**: `zensical.toml` uses TOML format (not YAML) - structured under `[project]` scope
- **Theme Variant**: Using `modern` variant (default); `classic` variant available to match original Material for MkDocs appearance
- **Theme Customization**: Theme palette supports light/dark/auto modes with custom `home` scheme for light mode
- **Markdown Extensions**: Includes PyMdown extensions for admonitions, code highlighting, emoji, tabs, and Mermaid diagrams
- **Navigation Features**: Instant loading, tabs (sticky), tracking, search (with suggestions/highlighting)
- **Custom Styling**: `docs/stylesheets/extra.css` for additional CSS
- **Blog Limitation**: Zensical does not yet support blog functionality (as of January 2026). Blog posts exist in `docs/blog/` but are served as regular markdown pages without blog-specific features (pagination, archives, post metadata)