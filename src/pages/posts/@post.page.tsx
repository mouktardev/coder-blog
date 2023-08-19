import CodeCopy from "#/components/CodeCopy";
import Image from "#/components/Image";
import TableOfContent from "#/components/TableOfContent";
import { Article } from "#/types/types";
import { slideInLeft, slideInTop } from "#/util/animation";
import { cn, flatten } from "#/util/util";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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

export function Page({ article }: { article: Article }) {
	return (
		<div className="p-5">
			<motion.div variants={slideInLeft}>
				<Image className="w-full h-52" src={article.image.src} />
			</motion.div>
			<motion.h1
				variants={slideInLeft}
				className="scroll-m-20 my-4 text-4xl font-medium tracking-tight lg:text-5xl"
			>
				{article.title}
			</motion.h1>
			<div className="relative flex gap-6">
				<motion.div
					variants={slideInTop}
					className="w-full p-5 mt-10 text-justify prose prose-a:no-underline prose-a:bg-black/30 prose-p:font-medium prose-p:tracking-wide prose-p:leading-7 prose-h3:font-normal prose-h2:font-medium prose-sm md:prose-lg prose-pre:bg-[rgba(40,44,52,1)] border rounded-lg"
				>
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
				</motion.div>
				<TableOfContent />
			</div>
		</div>
	);
}
