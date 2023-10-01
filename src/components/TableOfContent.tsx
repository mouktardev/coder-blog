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
		<ul className="sticky top-44 h-full w-64 space-y-5 overflow-auto rounded-lg border p-4">
			{headings.map((heading) => (
				<li
					key={heading.id}
					className={cn(
						heading.level === 2 ? "font-medium" : "",
						"flex items-center gap-2 hover:text-purple-400"
					)}
				>
					{heading.level === 3 && <ChevronRight size={20} />}
					<Link
						href={`#${heading.id}`}
						onClick={(e) => {
							e.preventDefault();
							const targetElement = document.querySelector(`#${heading.id}`);
							if (targetElement) {
								targetElement.scrollIntoView({
									behavior: "smooth",
								});
								// Update the URL in the address bar
								window.history.pushState({}, "", `#${heading.id}`);
							}
						}}
					>
						{heading.text}
					</Link>
				</li>
			))}
		</ul>
	);
}
