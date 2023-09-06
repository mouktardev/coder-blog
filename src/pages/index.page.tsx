import ArticleCard from "#/components/ArticleCard";
import Image from "#/components/Image";
import { Article } from "#/schema/ArticleSchema";
import { motion } from "framer-motion";
import { Framer } from "lucide-react";
import ViteSSRlogo from "/vite-plugin-ssr-logo.svg";
import Vitelogo from "/vite.svg";

type Props = {
	articles: Article[];
};

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export function Page({ articles }: Props) {
	return (
		<motion.div
			className="relative mx-auto w-full max-w-5xl p-5"
			initial={{ x: "-100%", opacity: 1 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
		>
			<div className="flex items-center gap-4">
				<h1 className="text-6xl font-medium uppercase leading-tight tracking-tight">
					Coder - Blog
				</h1>
				<Image src={Vitelogo} className="w-8 h-8" />
				<Image src={ViteSSRlogo} className="w-8 h-8" />
				<Framer size={28} />
			</div>
			<p className="text-justify text-xl max-w-2xl leading-7 tracking-wide mt-6">
				File based routing, SSR + SPA, page transitions, framer motion
				animation, layouts, pre-render and Generate SSG Dynamic pages,
				tailwindCSS, Markdown content collection Syntax highlighter and more.
			</p>
			<div className="mt-16 pb-32">
				<ArticleCard article={articles[0]} />
				<div className="mt-24 grid lg:grid-cols-3 gap-8">
					{articles.map((article, i) => (
						<ArticleCard key={i} article={article} />
					))}
				</div>
			</div>
		</motion.div>
	);
}
