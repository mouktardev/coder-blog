import { Link } from "#/components/Link";
import { usePageContext } from "#/hook/usePageContext";
import { transition } from "#/store/store";
import { containerLayout } from "#/util/animation";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function LayoutPosts({ children }: Props) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;
	const isTransition = useStore(transition);
	return (
		<main className="w-full max-w-5xl mx-auto">
			<div className="p-5">
				<Link href="/">
					<motion.div
						initial={{ rotate: 0, y: 0 }}
						animate={{ rotate: "45deg", y: 20 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="w-7 h-[3px] bg-black my-2 rounded-full"
					/>
					<motion.div
						initial={{ rotate: 0, scaleX: 1, x: 0 }}
						animate={{ rotate: "180deg", scaleX: 1.3, x: 12 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="w-7 h-[3px] bg-black my-2 rounded-full"
					/>
					<motion.div
						initial={{ rotate: 0, y: 0 }}
						animate={{ rotate: "-45deg", y: -20 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="w-7 h-[3px] bg-black my-2 rounded-full"
					/>
				</Link>
			</div>
			{isTransition && (
				<motion.div
					className="absolute z-40 w-full h-full top-0 left-0 bg-white/20 bg-center bg-[length:100px_100px] bg-no-repeat bg-[url('/loading.svg')] origin-center "
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				/>
			)}
			<motion.div
				key={urlPathname}
				variants={containerLayout}
				initial="exit"
				animate="enter"
				exit="exit"
			>
				{children}
			</motion.div>
		</main>
	);
}
