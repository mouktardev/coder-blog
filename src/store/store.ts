import { atom, map } from "nanostores";

interface bounding {
	top: number;
	left: number;
	width: number;
	height: number;
}
interface elements {
	title: bounding;
	image: bounding;
}

export const transition = atom<boolean>(false);

export const elementsCaptured = map<elements>({
	title: { height: 0, left: 0, top: 0, width: 0 },
	image: { height: 0, left: 0, top: 0, width: 0 },
});

export const open = atom<boolean>(false);

export function toggleSidebar() {
	open.set(!open.get());
}

export function setInitialPosition(event: React.MouseEvent<HTMLElement>) {
	const title = event.currentTarget;
	const titlePosition = title.getBoundingClientRect();

	const image = title.parentNode?.parentNode?.previousSibling as HTMLElement;
	const imagePosition = image?.getBoundingClientRect();

	const parent = title.closest(".parent") as HTMLElement;
	const parentPosition = parent.getBoundingClientRect();

	elementsCaptured.setKey("title", {
		top: titlePosition.top - parentPosition.top,
		left: titlePosition.left - parentPosition.left,
		width: titlePosition.width,
		height: titlePosition.height,
	});
	elementsCaptured.setKey("image", {
		top: imagePosition.top - parentPosition.top,
		left: imagePosition.left - parentPosition.left,
		width: imagePosition.width,
		height: imagePosition.height,
	});
}
