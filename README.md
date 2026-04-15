# Engineering Docs

A clean, bilingual (FR/EN) internal documentation site built with Next.js. Designed to be reusable - adapt it to any team or company by editing the markdown files and a few config values.

## Stack

- **[Next.js 16](https://nextjs.org)** - App Router, Turbopack
- **[next-intl](https://next-intl-docs.vercel.app)** - FR/EN routing & translations
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark / light mode
- **[MDX](https://mdxjs.com)** + **[rehype-pretty-code](https://rehype-pretty-code.netlify.app)** - Syntax-highlighted code blocks
- **[Tailwind CSS v4](https://tailwindcss.com)** + **[shadcn/ui](https://ui.shadcn.com)** - Styling & components
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown (tables, strikethrough…)

## Features

- Bilingual routing (`/fr/...` and `/en/...`) with a custom language switcher
- Dark / light mode with system preference detection
- Sidebar navigation with active link highlighting
- macOS-style code blocks with syntax highlighting (Shiki)
- shadcn `Table` component for clean data tables
- Fully typed with TypeScript

## Project Structure

```
app/
  [locale]/
    docs/[slug]/   ← doc pages (reads .md files)
    page.tsx       ← home / hero
components/        ← navbar, sidebar, footer, lang-switcher…
lib/
  get-doc.ts       ← MDX compiler + rehype pipeline
  mdx-components.tsx ← custom MDX component overrides
messages/
  fr.json          ← French translations
  en.json          ← English translations
.github/docs/
  fr/              ← French markdown doc files
  en/              ← English markdown doc files
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding / Editing Docs

1. Add a `.md` file in `.github/docs/fr/` and `.github/docs/en/`
2. Add the slug mapping in `lib/get-doc.ts` (`SLUG_MAP`) if the filename differs from the URL slug
3. Add the nav entry in `components/sidebar.tsx` and translations in `messages/*.json`

> **Note:** The doc files live outside the Next.js project root. After editing them, restart the dev server for changes to appear (Turbopack does not watch them).

## Customisation

| What                   | Where                                             |
| ---------------------- | ------------------------------------------------- |
| Site name & nav labels | `messages/fr.json` + `messages/en.json`           |
| Logo / brand icon      | `components/navbar.tsx` + `components/footer.tsx` |
| Contact email          | `components/footer.tsx`                           |
| Brand colors           | `app/globals.css` (`--primary` variable)          |
| Supported locales      | `i18n/routing.ts`                                 |

## Branches

| Branch      | Description                                             |
| ----------- | ------------------------------------------------------- |
| `main`      | Generic, brand-agnostic version                         |
| `c-data360` | Company-specific version (private logos, company email) |

## Author

**Segal G.** - [segal-portfolio.vercel.app](https://segal-portfolio.vercel.app) · [segal.gbenou26@gmail.com](mailto:segal.gbenou26@gmail.com)
