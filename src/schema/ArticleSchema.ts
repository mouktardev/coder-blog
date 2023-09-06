import { z } from "zod";

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
