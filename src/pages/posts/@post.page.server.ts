import { ArticleSchema } from "#/schema/ArticleSchema";
import fs from "fs";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { parse } from "zod-matter";

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
	// await sleep(1000); // Simulate slow network
	const fileContents = await fs.readFileSync(
		`./src/content/${pageContext.routeParams.post}.md`,
		"utf8"
	);
	const { data, content } = parse(fileContents, ArticleSchema);
	const article = {
		id: data.id,
		slug: data.slug,
		title: data.title,
		date: data.date,
		summary: data.summary,
		image: data.image,
		author: data.author,
		content: content,
	};

	return {
		pageContext: {
			pageProps: {
				article: article,
			},
			// The page's title & description
			documentProps: {
				title: article.title,
				description: `This page ia about ${article.title}`,
			},
		},
	};
}
