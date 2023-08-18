import ArticleCard from "#/components/ArticleCard";
import { Article } from "#/types/types";

export function Page({ articles }: { articles: Article[] }) {
	return (
		<div className="mx-auto w-full max-w-5xl p-5">
			<h1 className="text-6xl font-medium uppercase leading-tight tracking-tight">
				Coder - Blog
			</h1>
			<p className="text-justify text-xl max-w-2xl leading-7 tracking-wide mt-6">
				File based routing, page transitions, mix SSR + SPA , layouts,
				pre-render and Generate SSG Dynamic pages, tailwindCSS, Markdown content
				collection Syntax highlighter and more.
			</p>
			<div className="mt-16 pb-32">
				<ArticleCard article={articles[0]} />
				<div className="mt-24 grid lg:grid-cols-3 gap-8">
					{articles.map((article, i) => (
						<ArticleCard key={i} article={article} />
					))}
				</div>
			</div>
		</div>
	);
}
