import { ClassValue, clsx } from "clsx";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const generateSlug = (head: string) => {
	let str = head.replace(/^\s+|\s+$/g, "");
	str = str.toLowerCase();
	str = str
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
	return str;
};

export const flatten = (text: string, child: ReactNode): string => {
	return typeof child === "string"
		? text + child
		: React.Children.toArray(
				(child as React.ReactElement).props.children
		  ).reduce(flatten, text);
};

export function sleep(milliseconds: number): Promise<void> {
	return new Promise((r) => setTimeout(r, milliseconds));
}
