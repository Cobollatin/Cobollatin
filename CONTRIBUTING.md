# Publishing content

Create a PR containing the article or page, an author record if needed, and any translated counterpart. A reviewer should check factual claims, rights to text and media, attribution, links, translation accuracy, and the intended publication date. Merge does not publish automatically; the site is rebuilt and deployed manually.

## Authors

Create `src/content/authors/<id>.json` with a stable lowercase hyphenated ID:

```json
{
  "name": "Example Contributor",
  "bio": "Optional short description.",
  "website": "https://example.org"
}
```

The existing `sample` author is synthetic and belongs only to draft examples and tests. Replace it with a real contributor ID for real content. Every `authors` ID in a document must resolve to an author record; the build validates this.

Authors referenced by published posts or pages appear at `/<locale>/authors/` and `/<locale>/authors/<id>/` in both supported locales. A profile lists work in that locale, or English work when no translation is published for that section. Unreferenced records, including `sample`, are not published as profiles.

## Posts and pages

Posts can use `.md` or `.mdx` and live in `src/content/posts/en/` or `src/content/posts/es/`. Post filenames must be one lowercase hyphenated slug; posts publish at `/<locale>/blog/<slug>/`. Pages use `.mdx` under `src/content/pages/<locale>/`, can have nested lowercase hyphenated paths, and publish at `/<locale>/pages/<path>/`. The reserved slug `index` is unavailable.

Post template (`src/content/posts/en/your-slug.mdx`):

```mdx
---
title: A clear article title
description: A concise summary for lists and search previews.
publishedAt: 2026-10-26
locale: en
authors: [your-author-id]
draft: true
translationKey: shared-topic-id
---

Write the reviewed article here. MDX components require code review.
```

Page template (`src/content/pages/es/your-slug.mdx`):

```mdx
---
title: Una página clara
description: Resumen breve de la página.
locale: es
authors: [your-author-id]
draft: true
translationKey: shared-topic-id
---

Escribe el contenido revisado aquí.
```

Set `draft: false` or remove `draft` when ready to publish. Posts require `publishedAt`; `updatedAt` is optional. `translationKey` is optional, but translated versions must share it within the same collection. Keys, slugs, and author IDs should be stable. Locale in frontmatter must match the folder. Duplicate locale/slug paths or locale/translationKey pairs fail validation, including drafts. A published counterpart appears in the article language selector; an untranslated article switches to that language's home page with an accessible explanation. Blog, page, and tool index routes switch to their corresponding route.

Run `npm run check`, `npm test`, and `npm run build` before requesting review. The temporary published test fixture is generated and removed by `npm test`; it is not editorial content.
