# Repository Guidelines

## Project Structure & Module Organization

- Source: `src/` with `pages/`, `components/`, `layouts/`, `styles/`, `content/`, and `consts.ts`.
- Tests: unit/integration under `src/**/*.{test,spec}.{ts,tsx,js,jsx}`; e2e in `e2e/`.
- UI stories: `src/components/**/*.stories.tsx` (Storybook).
- Static assets: `public/`. Config: `astro.config.ts`, `vitest.config.ts`, `playwright.config.ts`, `.storybook/`, `tailwind.config.ts`, `tsconfig.json`.

## Build, Test, and Development Commands

- `bun run dev` — Start Astro dev server.
- `bun run build` — Production build (Vercel-ready).
- `bun run preview` — Serve built app locally.
- `bun run test` — Vitest (coverage to `coverage/`).
- `bun run e2e` — Playwright tests in `e2e/`.
- `bun run storybook` / `bun run build-storybook` — Storybook dev/build.
- `bun run lint` — ESLint, Stylelint, Prettier checks.
- `bun run format` — Autofix (ESLint/Stylelint) + Prettier write.
- `bun run check` — Astro/TS type checks.

## Coding Style & Naming Conventions

- Languages: TypeScript, Astro, React (Vite).
- Formatting: 2-space indent, single quotes, semicolons, trailing commas (ESLint/Prettier).
- Components: `PascalCase` (e.g., `src/components/Button.tsx`). Tests: `Button.spec.ts`. Pages follow route-based names in `src/pages/`.
- CSS/SCSS: linted via Stylelint; use Tailwind utilities; keep custom CSS semantic and minimal.

## Testing Guidelines

- Unit/integration: Vitest picks `src/**/*.{test,spec}.{ts,tsx,js,jsx}`; prefer focused tests and meaningful coverage.
- E2E: add Playwright specs in `e2e/`; optional `webServer` can be configured if needed.
- Stories: colocate `*.stories.tsx` with components; Storybook tests run via Vitest Storybook workspace.

## Commit & Pull Request Guidelines

- Commits: imperative, concise (e.g., "Add HeaderLink aria label"); reference issues like `#123`.
- Hooks: pre-commit runs `bun run format`; pre-push runs `bun run lint && bun run check && bun run test && bun run e2e && bun run build` — ensure all pass locally.
- PRs: include summary, rationale, linked issues, screenshots for UI changes, and test notes.

## Security & Configuration Tips

- Never commit secrets; use environment variables. Sentry config: `sentry.client.config.ts`. Deployment uses `vercel.json`.
- First run: `bun install` then `bun run dev`.

## Agent-Specific Instructions

- Keep patches minimal and focused; follow existing tooling and structure.
- Place tests alongside code; avoid renaming/moving files unless necessary.
