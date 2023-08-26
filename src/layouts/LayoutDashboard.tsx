import { Fade, WidthLeft, slideInLeft } from "#/util/animation";
import { cn } from "#/util/util";
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
		<div className="w-full max-w-5xl mx-auto flex gap-4 p-5">
			<motion.aside
				className="sticky flex flex-col inset-y-0 overflow-hidden p-2 border"
				variants={WidthLeft}
				initial="initial"
				animate={showSidebar ? "animate" : "exit"}
			>
				<Button
					className="w-10 h-10 border ml-auto mb-6 px-2"
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
				<nav className="flex flex-col gap-4">
					{[
						{ title: "All", href: "/projects", icon: Folder },
						{ title: "Recent", href: "/projects/recent", icon: Clock },
					].map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className={cn(
								index === 0 && "border-b",
								"flex items-center gap-4 p-2 hover:bg-gray-300/60 dark:hover:bg-gray-950/60 cursor-pointer"
							)}
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
					))}
				</nav>
			</motion.aside>
			<AnimatePresence initial={false} mode="wait">
				<motion.div
					key={url}
					className="flex-1 bg-neutral-100"
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
