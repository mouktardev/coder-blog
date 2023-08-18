import { atom } from "nanostores";

export const transition = atom<boolean>(false);
export const open = atom<boolean>(false);
export function toggleSidebar() {
	open.set(!open.get());
}
