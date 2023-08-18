import { Link } from "#/components/Link";
import Sidebar from "#/components/Sidebar";
import { usePageContext } from "#/hook/usePageContext";
import { transition } from "#/store/store";
import { containerLayout } from "#/util/animation";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function LayoutDefault({ children }: Props) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;
	const isTransition = useStore(transition);

	return (
		<main className="w-full max-w-5xl mx-auto">
			<Sidebar />
			<div className="p-5">
				<nav className="flex gap-4 items-center border-t">
					{[
						{ title: "Articles", href: "/" },
						{ title: "Projects", href: "/projects" },
					].map((Links, index) => (
						<Link
							key={index}
							href={Links.href}
							className="tracking-wider p-2 cursor-pointer"
							activeProps="font-bold border-black border-t-4"
						>
							{Links.title}
						</Link>
					))}
				</nav>
			</div>
			{isTransition && (
				<motion.div
					className="fixed z-40 w-full h-screen top-0 left-0 bg-white/20 bg-center bg-[length:100px_100px] bg-no-repeat bg-[url('/loading.svg')] origin-center "
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
