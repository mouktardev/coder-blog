import { Article, ArticleSchema } from "#/schema/ArticleSchema";
import fs from "fs";
import { parse } from "zod-matter";

export async function onBeforeRender() {
	// await sleep(1000); // Simulate slow network
	const articles = getArticles();
	return {
		pageContext: {
			pageProps: {
				articles: articles,
			},
			// The page's title & description
			documentProps: {
				title: "All Posts",
				description: `This page has ${articles.length} posts to browse`,
			},
		},
	};
}

function getArticles(): Article[] {
	const folder = "./src/content/";
	const files = fs.readdirSync(folder);
	const markdownArticles = files.filter((file) => file.endsWith(".md"));

	// Get zod-matter data from each file.
	const articles = markdownArticles.map((fileName) => {
		const fileContents = fs.readFileSync(`./src/content/${fileName}`, "utf8");
		const { data, content } = parse(fileContents, ArticleSchema);
		return {
			id: data.id,
			slug: data.slug,
			title: data.title,
			date: data.date,
			summary: data.summary,
			image: data.image,
			author: data.author,
			content: content,
		};
	});

	return articles;
}

export async function prerender() {
	const articles = getArticles();
	return [
		...articles.map((article) => {
			const url = `/posts/${article.slug}`;
			return {
				url,
				// Note that we can also provide the `pageContext` of other pages.
				// This means that `vite-plugin-ssr` will not call any
				// `onBeforeRender()` hook and the getPosts will be called
				// only once (in this `prerender()` hook).
				pageContext: {
					pageProps: {
						article: article,
					},
					documentProps: {
						title: article.title,
						description: `This page ia about ${article.title}`,
					},
				},
			};
		}),
	];
}
