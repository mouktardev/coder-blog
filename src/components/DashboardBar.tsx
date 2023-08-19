import { Fade, WidthLeft } from "#/util/animation";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, Folder } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { Button } from "./Button";
import { Link } from "./Link";

type Props = {
	children: ReactNode;
};

export default function DashboardBar({ children }: Props) {
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = useCallback(
		() => setShowSidebar((value) => !value),
		[]
	);
	return (
		<div className="flex gap-4 p-5">
			<motion.aside
				variants={WidthLeft}
				initial="start"
				animate={showSidebar ? "enter" : "exit"}
				className="sticky top-0 overflow-hidden p-2 backdrop-blur-lg bg-white/30 border"
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
							<ChevronLeft className="h-5 w-5 " />
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
								<item.icon className="w-5 h-5" />
								<motion.p
									variants={Fade}
									animate={showSidebar ? "exit" : "enter"}
									className="tracking-wide text-sm"
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
			{children}
		</div>
	);
}
