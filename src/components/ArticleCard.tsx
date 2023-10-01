import { Article } from "#/schema/ArticleSchema";
import { setInitialPosition } from "#/store/store";
import Image from "./Image";
import { Link } from "./Link";
type Props = {
	article: Article;
};

export default function ArticleCard({ article }: Props) {
	return (
		<div className="@container">
			<div className="grid gap-8 @3xl:grid-cols-2">
				<Image
					className="h-full w-full rounded-2xl"
					src={article.image.src}
					alt={article.image.alt}
					aspectRatio="rectangle"
				/>
				<div>
					<div>
						<p className="text-sm text-gray-600">{article.date}</p>
						<Link
							href={`/posts/${article.slug}`}
							className="cursor-pointer underline-offset-8 hover:underline"
							onClick={setInitialPosition}
							keep-scroll-position="true"
						>
							<h1 className="mt-2 text-3xl font-medium tracking-tight">
								{article.title}
							</h1>
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
		</div>
	);
}
