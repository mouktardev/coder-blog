import { Fade, WidthLeft } from "#/util/animation";
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
		<div className="mx-auto flex w-full max-w-5xl gap-4 p-5">
			<motion.aside
				className="sticky inset-y-0 flex flex-col overflow-hidden border p-2"
				variants={WidthLeft}
				initial="initial"
				animate={showSidebar ? "animate" : "exit"}
			>
				<Button
					className="mb-6 ml-auto h-10 w-10 border px-2"
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
								"flex cursor-pointer items-center gap-4 p-2 hover:bg-gray-300/60 dark:hover:bg-gray-950/60"
							)}
							activeProps="font-bold"
						>
							<item.icon size={20} />
							<motion.p
								className="text-sm tracking-wide"
								variants={Fade}
								animate={showSidebar ? "exit" : "animate"}
							>
								{item.title}
							</motion.p>
						</Link>
					))}
				</nav>
			</motion.aside>
			<aside className="flex flex-1 items-center justify-center overflow-hidden border bg-neutral-100">
				<AnimatePresence initial={false} mode="popLayout">
					<motion.div
						initial={{ y: "100%", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: "-100%", opacity: 0 }}
						transition={{
							duration: 0.4,
							ease: [0.6, 0.01, 0.5, 0.9],
						}}
						key={url}
						className="w-full"
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</aside>
		</div>
	);
}
