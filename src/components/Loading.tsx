import { transition } from "#/store/store";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";

export const Loading = () => {
	const isTransition = useStore(transition);

	if (!isTransition) {
		return null; // Don't render loading if not transitioning page
	}

	return (
		<motion.div
			className="fixed z-40 w-full h-screen top-0 left-0 bg-white/20 bg-center bg-[length:100px_100px] bg-no-repeat bg-[url('/loading.svg')] origin-center "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
		/>
	);
};
