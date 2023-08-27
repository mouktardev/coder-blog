# Coder-Blog <img src="public/vite-plugin-ssr-logo.svg" alt="" width="28"> <img src="public/vite.svg" alt="" width="28">

File based routing, SSR + SPA, page transitions, framer motion
animation, layouts, pre-render and Generate SSG Dynamic pages,
tailwindCSS, Markdown content collection Syntax highlighter and more.

### Includes:

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

## Page transition idea:

- Index page Capture the clicked article state of two elements title and image that will be animated in the Dynamic `@post.page.tsx` pages
- Dashboard layout each page share exit and enter animation

### Page transition bug:

if you refresh `@post.page` the captured element state will initialized to zero which effect the initial animation start.

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
