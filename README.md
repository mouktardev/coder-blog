# Coder-Blog <img src="public/vite-plugin-ssr-logo.svg" alt="" width="28"> <img src="public/vite.svg" alt="" width="28"> <img src="public/framer-motion.svg" alt="" width="18">

Taking inspiration from both **Astro SSG** and the **View Transition API**, my aim with vite-plugin-ssr and React is to gain greater control over scenarios involving shared UI animations between pages. This includes managing factors such as animation duration and easing while gracefully handling loading states during server fetches. This way, we can ensure that slow networks or large data fetches between pages don't compromise the overall animation experience.

Also using vite-plugin-ssr we have cool features like:
**File based routing**, **SSR + SPA**, **Page Transitions functions**, **Layouts**, **Pre-rendering**,

As the name suggest wanted to add some small feature such as
**Markdown content collection**, **Syntax Highlighter**, **Copy Code Blocks**, **generative Table of content and headings**

## Projects Includes:

- [Vite](https://vitejs.dev),
- [vite-plugin-ssr](https://vite-plugin-ssr.com/) handle all Filesystem Routing, Data fetching, Pre-rendering, Layouts, and more.
- [ReactJS](https://reactjs.org)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [TypeScript](https://www.typescriptlang.org)
- [react-markdown](https://github.com/remarkjs/react-markdown) React component to render markdown.
  - [remark-gfm](https://github.com/remarkjs/remark-gfm) remark plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
  - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) Syntax highlighting component for React
- [zod-matter](https://github.com/HiDeoo/zod-matter) parse and validate frontmatter a tiny wrapper for gray-matter
- [lucide-react](https://lucide.dev/) an open source icon library.
- [framer-motion](https://github.com/framer/motion) an open source motion library for React, made by Framer.
- [nanostores](https://github.com/nanostores/nanostores) an open source state manager.

## Basic commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                                                        |
| :------------- | :---------------------------------------------------------------------------- |
| `pnpm install` | Installs dependencies                                                         |
| `pnpm dev`     | Starts local dev server at `localhost:3000` and lunch app window              |
| `pnpm build`   | Build your production app to `./dist/client` and server to `./dist/server`    |
| `pnpm lint`    | runs eslint to identify if problematic patterns found in your JavaScript code |
| `pnpm check`   | prettier check if files are formatted                                         |
| `pnpm format`  | prettier format files                                                         |

---

> twitter [@mouktardev](https://twitter.com/mouktardev) Threads [@mouktardev](https://www.threads.net/@mouktardev)
