import ArticleCard from "#/components/ArticleCard";
import { Article } from "#/types/types";
import { slideInLeft } from "#/util/animation";
import { motion } from "framer-motion";

export function Page({ articles }: { articles: Article[] }) {
	return (
		<div className="mx-auto w-full max-w-5xl p-5">
			<motion.h1
				variants={slideInLeft}
				className="text-6xl font-medium uppercase leading-tight tracking-tight"
			>
				Coder - Blog
			</motion.h1>
			<motion.p
				variants={slideInLeft}
				className="text-justify text-xl max-w-2xl leading-7 tracking-wide mt-6"
			>
				File based routing, page transitions, mix SSR + SPA , layouts,
				pre-render and Generate SSG Dynamic pages, tailwindCSS, Markdown content
				collection Syntax highlighter and more.
			</motion.p>
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
