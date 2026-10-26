# Cobollatin, fresh Astro foundation

This is the rebuild branch of the existing Cobollatin repository. The previous in-progress site is preserved at `preserve/pre-astro-rebuild-20261026` (`fc3f618`). Nothing has been pushed or deployed.

The site is static Astro with English and Spanish routes, schema-checked posts and authors, a tool registry, and a local word counter. No biography or article has been attributed to the site owner. The `sample` author and post are clearly labeled examples; the post has `draft: true` and is not published. Replace them with real author records and posts when ready. Each post names one or more author IDs, a locale, and optionally a shared `translationKey` for translated versions. Draft posts are omitted from the site. Locale switching returns to the other language's home page so it never links to an untranslated article.

## Develop and verify

Requires Node.js 22.12 or newer.

```powershell
npm ci
npm run check
npm test
npm run build
npm run dev
```

Set `PUBLIC_SITE_URL` to the final production origin before building for deployment. It enables canonical URLs; leave it unset for local work. The app does not need a Vercel adapter while it remains fully static.

## Manual Vercel deployment preparation

Keep Git auto-deployment disconnected; `vercel.json` also disables Git-triggered deployments if a repository is connected later. This checkout retains ignored `.vercel/output` build files from the prior site, but no `.vercel/project.json` link. Choose the intended Vercel project, run `vercel link`, and verify its project and scope before a release. Explicitly run `vercel deploy --prod` only for an approved release, then verify the assigned domain and deployment. No deployment has been done for this rebuild. `.vercel/` and local env files are ignored.

The current root path offers a language choice. Content lives under `/en/` and `/es/`. Decide the default language and final domain before launch.
