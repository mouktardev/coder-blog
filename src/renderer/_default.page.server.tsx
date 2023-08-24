import type { PageContextServer } from "#/hook/types";
import { getPageSeo } from "#/util/getPageSeo";
import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { App } from "./_app";
import logoUrl from "/vite.svg";

export const passToClient = ["pageProps", "documentProps", "someAsyncProps"];

export async function render(pageContext: PageContextServer) {
	const { Page, pageProps } = pageContext;

	const stream = dangerouslySkipEscape(
		renderToString(
			<App pageContext={pageContext}>
				<Page {...pageProps} />
			</App>
		)
	);

	const { title, description } = getPageSeo(pageContext);

	const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
		<meta charset="UTF-8" />
		<meta name="description" content="${description}" />
		<link rel="icon" href="${logoUrl}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${stream}</div>
      </body>
    </html>`;

	return {
		documentHtml,
		// See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
		// pageContext: async () => {
		// 	return {
		// 		someAsyncProps: 42,
		// 	};
		// },
	};
}
