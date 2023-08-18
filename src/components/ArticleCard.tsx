import { Article } from "#/types/types";
import { slideInTop } from "#/util/animation";
import { motion } from "framer-motion";
import Image from "./Image";
import { Link } from "./Link";

export default function ArticleCard({ article }: { article: Article }) {
	return (
		<motion.div variants={slideInTop} className="@container">
			<div className="grid gap-8 @3xl:grid-cols-2">
				<Image
					src={article.image.src}
					aspectRatio="rectangle"
					className="h-full w-full rounded-2xl"
				/>
				<div>
					<div>
						<p className="text-sm text-gray-600">{article.date}</p>
						<Link
							href={`/posts/${article.slug}`}
							className="hover:underline underline-offset-8 cursor-pointer"
						>
							<p className="mt-2 text-3xl font-medium leading-9 tracking-tight">
								{article.title}
							</p>
						</Link>
						<p className="mt-3 text-xl leading-8 text-gray-600">
							{article.summary}
						</p>
					</div>
					<div className="mt-11 flex  @3xl:flex-col">
						<p className="text-sm font-medium">{article.author.name}</p>
						<span className="px-1.5 text-sm text-gray-600 @3xl:hidden">
							&middot;
						</span>
						<p className="text-sm text-gray-600">{article.author.title}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
