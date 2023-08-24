import { Fade, WidthLeft, slideInLeft } from "#/util/animation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, Clock, Folder } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { Button } from "../components/Button";
import { Link } from "../components/Link";

type Props = {
	children: ReactNode;
	url: string;
};

export function LayoutDashboard({ children, url }: Props) {
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = useCallback(
		() => setShowSidebar((value) => !value),
		[]
	);
	return (
		<div className="w-full h-[400px] max-w-5xl mx-auto flex gap-4 p-5">
			<motion.aside
				className="sticky top-0 overflow-hidden p-2 border"
				variants={WidthLeft}
				initial="initial"
				animate={showSidebar ? "animate" : "exit"}
			>
				<nav className="flex flex-col gap-4">
					<Button
						className="w-10 h-10 ml-auto border px-2"
						onClick={toggleSidebar}
					>
						<motion.div
							initial={{ rotate: 0 }}
							animate={showSidebar ? { rotate: 180 } : { rotate: 0 }}
							transition={{ ease: "linear" }}
						>
							<ChevronLeft size={20} />
						</motion.div>
					</Button>
					{[
						{ title: "All", href: "/projects", icon: Folder },
						{ title: "Recent", href: "/projects/recent", icon: Clock },
					].map((item, index) => (
						<div key={index}>
							<Link
								href={item.href}
								className="flex items-center gap-4 p-2 hover:bg-gray-300/60 dark:hover:bg-gray-950/60 cursor-pointer rounded-md"
								activeProps="font-bold"
							>
								<item.icon size={20} />
								<motion.p
									className="tracking-wide text-sm"
									variants={Fade}
									animate={showSidebar ? "exit" : "animate"}
								>
									{item.title}
								</motion.p>
							</Link>
							{index === 0 && (
								<div className="w-full h-[1px] bg-black/10 px-5" />
							)}
						</div>
					))}
				</nav>
			</motion.aside>
			<AnimatePresence initial={false} mode="wait">
				<motion.div
					key={url}
					className="flex-1"
					variants={slideInLeft}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
