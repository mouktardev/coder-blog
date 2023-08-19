import { LayoutDefault } from "#/layouts/LayoutDefault";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { PageContextProvider } from "../hook/usePageContext";
import type { PageContext } from "../types/types";

type Props = {
	pageContext: PageContext;
	children: React.ReactNode;
};

export function App({ pageContext, children }: Props) {
	const Layout = pageContext.exports.Layout || LayoutDefault;
	return (
		// <React.StrictMode>
		<PageContextProvider pageContext={pageContext}>
			<AnimatePresence initial={false} mode="wait">
				{Layout.name === "LayoutProjects" ? (
					<LayoutDefault>
						<Layout>{children}</Layout>
					</LayoutDefault>
				) : (
					<Layout>{children}</Layout>
				)}
			</AnimatePresence>
		</PageContextProvider>
		// </React.StrictMode>
	);
}
