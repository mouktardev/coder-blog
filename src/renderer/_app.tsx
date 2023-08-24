import type { PageContext } from "#/hook/types";
import { LayoutDefault } from "#/layouts/LayoutDefault";
import React from "react";
import { PageContextProvider } from "../hook/usePageContext";

type Props = {
	pageContext: PageContext;
	children: React.ReactNode;
};

export function App({ pageContext, children }: Props) {
	const Layout = pageContext.exports.Layout || LayoutDefault;
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<Layout>{children}</Layout>
			</PageContextProvider>
		</React.StrictMode>
	);
}
