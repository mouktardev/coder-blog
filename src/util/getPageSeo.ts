export function getPageSeo(pageContext: {
	exports: { documentProps?: { description: string; title: string } };
	documentProps?: { description: string; title: string };
}) {
	const description =
		// For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
		(pageContext.exports.documentProps || {}).description ||
		// For dynamic titles (defined in the `export addContextProps()` of the page's `.page.server.js`)
		(pageContext.documentProps || {}).description ||
		"an app using Vite + vite-plugin-ssr";

	const title =
		// For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
		(pageContext.exports.documentProps || {}).title ||
		// For dynamic titles (defined in the `export addContextProps()` of the page's `.page.server.js`)
		(pageContext.documentProps || {}).title ||
		"Home";

	return { title, description };
}
