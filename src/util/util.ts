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

export function smoothScrollTo(
	targetY: number,
	durationInSeconds: number,
	delayInSeconds: number
) {
	const durationInMilliseconds = durationInSeconds * 1000; // Convert seconds to milliseconds
	const delayInMilliseconds = delayInSeconds * 1000; // Convert seconds to milliseconds

	setTimeout(() => {
		const startY = window.scrollY;
		const startTime = performance.now();

		function scrollAnimation(currentTime: number) {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / durationInMilliseconds, 1);

			const easedProgress = easeOutCubic(progress);

			const newY = startY + (targetY - startY) * easedProgress;
			window.scrollTo(0, newY);

			if (progress < 1) {
				requestAnimationFrame(scrollAnimation);
			}
		}
		requestAnimationFrame(scrollAnimation);
	}, delayInMilliseconds);
}
// Easing function
function easeOutCubic(t: number) {
	return 1 - Math.pow(1 - t, 3);
}
