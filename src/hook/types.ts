import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import type {
	PageContextBuiltIn,
	// When using Client Routing https://vite-plugin-ssr.com/clientRouting
	PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";

type Page = (pageProps: PageProps) => React.ReactElement;
export type PageProps = Record<string, unknown>;

export type PageContextCustom = {
	Page: Page;
	pageProps?: PageProps;
	exports: {
		documentProps?: {
			title: string;
			description: string;
		};
		Layout: ({ children }: { children: ReactNode }) => JSX.Element;
	};
	documentProps?: {
		title: string;
		description: string;
	};
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
	PageContextCustom;
export type PageContext = PageContextClient | PageContextServer;
