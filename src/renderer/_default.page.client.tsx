import "#/style/global.css";
import ReactDOM from "react-dom/client";
import { transition } from "../store/store";
import type { PageContextClient } from "../types/types";
import { getPageSeo } from "../util/getPageSeo";
import { App } from "./_app";

let root: ReactDOM.Root;

export const clientRouting = true;
export const hydrationCanBeAborted = true;

export async function render(pageContext: PageContextClient) {
	const { Page, pageProps } = pageContext;

	const page = (
		<App pageContext={pageContext}>
			<Page {...pageProps} />
		</App>
	);

	const container = document.getElementById("root")!;
	if (pageContext.isHydration) {
		// SSR
		root = ReactDOM.hydrateRoot(container, page);
	} else {
		if (!root) {
			// SPA
			root = ReactDOM.createRoot(container);
		}
		root.render(page);
	}

	//update SEO dynamically on page change
	const { title, description } = getPageSeo(pageContext);
	document.title = title;
	const existingMetaTag = document.querySelector('meta[name="description"]');
	if (existingMetaTag) {
		existingMetaTag.setAttribute("content", description);
	}
}

export function onHydrationEnd() {
	// console.log("Hydration finished; page is now interactive.");
}

export function onPageTransitionStart() {
	// console.log("Page transition start");
	transition.set(true);
	// console.log("Is backwards navigation?", pageContext.isBackwardNavigation);
}

export function onPageTransitionEnd() {
	// console.log("Page transition end");
	transition.set(false);
}
