import { cn } from "#/util/util";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "./Link";

interface toc {
	id: string;
	text: string;
	level: number;
}

export default function TableOfContent() {
	const [headings, setHeadings] = useState<toc[]>([]);

	useEffect(() => {
		const mutationObserver = new MutationObserver(() => {
			const elements = Array.from(
				document.querySelectorAll<HTMLElement>("h2, h3, h4")
			).map((elem) => ({
				id: elem.id,
				text: elem.innerText,
				level: Number(elem.nodeName.charAt(1)),
			}));
			setHeadings(elements);
		});

		// Observe changes to the document body and its descendants
		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});

		// Initial run to get headings on mount
		const initialElements = Array.from(
			document.querySelectorAll<HTMLElement>("h2, h3, h4")
		).map((elem) => ({
			id: elem.id,
			text: elem.innerText,
			level: Number(elem.nodeName.charAt(1)),
		}));
		setHeadings(initialElements);

		// Cleanup the observer when the component unmounts
		return () => mutationObserver.disconnect();
	}, []);

	return (
		<ul className="sticky w-64 h-full top-20 overflow-auto p-4 mt-10 space-y-5 border rounded-lg">
			{headings.map((heading) => (
				<li
					key={heading.id}
					className={cn(
						heading.level === 2 ? "font-medium" : "",
						"flex gap-2 items-center hover:text-purple-400"
					)}
				>
					{heading.level === 3 && <ChevronRight className="h-4 w-4" />}
					<Link
						href={`#${heading.id}`}
						// href={`/posts/${slug}#${heading.id}`}
						onClick={(e) => {
							e.preventDefault();
							document.querySelector(`#${heading.id}`)?.scrollIntoView({
								behavior: "smooth",
							});
						}}
					>
						{heading.text}
					</Link>
				</li>
			))}
		</ul>
	);
}
