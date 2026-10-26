# Contributing

## Blog posts (i18n)

This site supports 5 languages:

- English (`en`, default)
- Spanish (`es`)
- Chinese (`zh`)
- Japanese (`ja`)
- Russian (`ru`)

Create a new post folder + translation stubs:

```bash
bun run new:post my-new-post "My Post Title"
```

This creates:

```text
src/content/blog/my-new-post/en.mdx
src/content/blog/my-new-post/es.mdx
src/content/blog/my-new-post/zh.mdx
src/content/blog/my-new-post/ja.mdx
src/content/blog/my-new-post/ru.mdx
```

Each file must include frontmatter with `lang` set to the matching locale.

## Accessibility helpers for authors

Blog MDX files can use these components without importing them:

- `<Callout variant="info|note|warning|danger" title="...">...</Callout>`
- `<ExternalLink href="https://example.com">...</ExternalLink>` (adds safe `rel`/`target` + screen-reader hint)
- `<Details summary="...">...</Details>`

## Local dev

```bash
bun install
bun run dev
```
