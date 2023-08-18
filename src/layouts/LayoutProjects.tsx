import { Fade, WidthLeft, containerLayout } from "#/util/animation";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, Folder } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { Button } from "../components/Button";
import { Link } from "../components/Link";

type Props = {
	children: ReactNode;
};

export function LayoutProjects({ children }: Props) {
	const [showSidebar, setShowSidebar] = useState(false);
	const toggleSidebar = useCallback(
		() => setShowSidebar((value) => !value),
		[]
	);
	return (
		<main className="flex gap-4 p-5">
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
					<Link
						href="/projects"
						className="flex items-center gap-4 p-2 hover:bg-gray-300/60 dark:hover:bg-gray-950/60 cursor-pointer rounded-md"
					>
						<Folder className="w-5 h-5" />
						<motion.p
							variants={Fade}
							animate={showSidebar ? "exit" : "enter"}
							className="tracking-wide text-sm"
						>
							All
						</motion.p>
					</Link>
					<div className="w-full h-[1px] bg-black/10 px-5" />
					<Link
						href="/projects/recent"
						className="flex items-center gap-4 p-2 hover:bg-gray-300/60 dark:hover:bg-gray-950/60 cursor-pointer rounded-md"
					>
						<Clock className="w-5 h-5" />
						<motion.p
							variants={Fade}
							animate={showSidebar ? "exit" : "enter"}
							className="tracking-wide text-sm"
						>
							Recent
						</motion.p>
					</Link>
				</nav>
			</motion.aside>
			<motion.div
				variants={containerLayout}
				className="w-full "
				initial="exit"
				animate="enter"
				exit="exit"
			>
				{children}
			</motion.div>
		</main>
	);
}
