# Cobollatin

Static Astro site with English (`/en/`) and Spanish (`/es/`) routes. The root `/` selects a language in the browser: a saved explicit choice, then the first supported browser language, then English. Direct locale URLs always keep their requested language. The site starts in dark mode; visitors can save a light preference with the header button.

## Local work

Requires Node.js 22.12 or newer.

```powershell
npm ci
npm run check
npm test
npm run build
npm run dev
```

`npm test` includes a temporary content fixture build. It creates synthetic published posts and a page, verifies generated routes and the language switch, checks that a draft is absent, then removes the temporary source files. Run `npm run build` afterward to restore the ordinary `dist/` output. `dist/` is ignored by Git.

Set `PUBLIC_SITE_URL` to the final origin before a production build to emit canonical URLs. No adapter is needed for static output.

## Publishing through a reviewed PR

See [CONTRIBUTING.md](CONTRIBUTING.md) for frontmatter examples and review rules. A reviewed MDX document merged into `src/content/posts/<locale>/` or `src/content/pages/<locale>/` becomes a public route at the **next manual build and deployment**. Merging a PR alone does not deploy the site. Drafts (`draft: true`) remain unpublished.

## Deployment

Deployment is manual only. `vercel.json` disables Git triggered deployment. Confirm the intended Vercel project and scope before linking this checkout, then build and deploy only for an approved release. This work has not linked, pushed, or deployed the site.
