import CodeCopy from "#/components/CodeCopy";
import Image from "#/components/Image";
import TableOfContent from "#/components/TableOfContent";
import { Article } from "#/schema/ArticleSchema";
import { elementsCaptured } from "#/store/store";
import { cn, flatten } from "#/util/util";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
	article: Article;
};

interface HeadingRendererProps {
	level: number;
	children: ReactNode;
}

const HeadingRenderer = (props: HeadingRendererProps) => {
	const children = React.Children.toArray(props.children);
	const text = children.reduce(flatten, "") as string;
	const slug = text.toLowerCase().replace(/[!?\s]/g, "-");
	return React.createElement(
		"h" + props.level,
		{ id: slug, className: "anchor" },
		props.children
	);
};

const transition = { duration: 1.4, ease: [0.6, 0.01, 0.5, 0.9] };

export function Page({ article }: Props) {
	const { image, title } = useStore(elementsCaptured);
	return (
		<motion.div
			className="mx-auto w-full max-w-5xl p-5"
			exit={{
				x: "100%",
				opacity: 0,
			}}
		>
			<motion.div
				className="absolute z-50"
				onAnimationStart={() =>
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
				}
				initial={{
					top: image.top + "px",
					left: image.left + "px",
					width: image.width + "px",
					height: image.height + "px",
				}}
				animate={{
					top: 200,
					left: "45%",
					width: "50%",
					height: "400px",
					transition: { delay: 0.4, ...transition },
				}}
			>
				<Image
					className="w-full h-full rounded-2xl"
					src={article.image.src}
					alt={article.image.alt}
					aspectRatio="portrait"
				/>
			</motion.div>
			<motion.div
				className="absolute z-50"
				initial={{
					top: title.top + "px",
					left: title.left + "px",
					fontSize: "30px",
					lineHeight: "36px",
				}}
				animate={{
					top: 200,
					left: "5%",
					fontSize: "100px",
					lineHeight: "90px",
					color: "#ffff",
					transition: { delay: 0.4, ...transition },
				}}
			>
				<h1 className="font-medium tracking-tight">{article.title}</h1>
			</motion.div>
			<motion.div
				initial={{ width: 0, opacity: 0 }}
				animate={{
					width: "100%",
					opacity: 1,
					transition: { delay: 0.4, ...transition },
				}}
				className="relative h-[300px] bg-gradient-to-l from-pink-800 to-purple-800"
			/>
			<div className="w-full h-[300px]" />
			<motion.div
				className="relative flex gap-6"
				initial={{ y: 100, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { delay: 1.2, ...transition },
				}}
			>
				<TableOfContent />
				<div className="w-full p-5 text-justify prose prose-a:no-underline prose-a:bg-black/30 prose-p:font-medium prose-p:tracking-wide prose-p:leading-7 prose-h3:font-normal prose-h2:font-medium prose-sm md:prose-lg prose-pre:bg-[rgba(40,44,52,1)] border rounded-lg">
					<ReactMarkdown
						children={article.content}
						components={{
							h3: HeadingRenderer,
							h2: HeadingRenderer,
							pre({ children, className }) {
								return (
									<pre className={cn("relative", className)}>
										<CodeCopy>{children}</CodeCopy>
										{children}
									</pre>
								);
							},
							code({ inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || "");
								return !inline && match ? (
									<SyntaxHighlighter
										{...props}
										// customStyle={{ borderRadius: "8px" }}
										// className={cn("rounded-3xl", className)}
										children={String(children).replace(/\n$/, "")}
										style={oneDark}
										showLineNumbers={true}
										language={match[1]}
										PreTag="div"
									/>
								) : (
									<code {...props} className={className}>
										{children}
									</code>
								);
							},
						}}
					/>
				</div>
			</motion.div>
		</motion.div>
	);
}
