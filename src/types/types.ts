import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import type {
	PageContextBuiltIn,
	// When using Client Routing https://vite-plugin-ssr.com/clientRouting
	PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from "vite-plugin-ssr/types";
import { z } from "zod";

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

export const ArticleSchema = z.object({
	id: z.coerce.number(),
	title: z.string(),
	date: z.string(),
	summary: z.string(),
	image: z.object({
		src: z.string(),
		alt: z.string().optional(),
	}),
	author: z.object({
		name: z.string(),
		title: z.string(),
	}),
	slug: z.string().max(16),
});

export type Article = {
	id: number;
	slug: string;
	summary: string;
	date: string;
	image: {
		src: string;
		alt?: string;
	};
	author: {
		name: string;
		title: string;
	};
	title: string;
	content: string;
};

export type Project = {
	title: number;
	url: string;
};
