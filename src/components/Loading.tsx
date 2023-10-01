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
			className="fixed left-0 top-0 z-40 h-screen w-full origin-center bg-white/20 bg-[url('/loading.svg')] bg-[length:100px_100px] bg-center bg-no-repeat "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
		/>
	);
};
