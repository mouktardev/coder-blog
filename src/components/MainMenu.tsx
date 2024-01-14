import { open, toggleSidebar } from "#/store/store";
import { PageSlide, slideInLeft } from "#/util/animation";
import { useStore } from "@nanostores/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { Button } from "./Button";
import { Link } from "./Link";

export default function MainMenu() {
	const isOpen = useStore(open);
	const [scope, animate] = useAnimate();
	useEffect(() => {
		const menuAnimations = isOpen
			? [
					[
						"li:nth-child(1)",
						{ rotate: "225deg", y: 12, backgroundColor: "#fff" },
					],
					[
						"li:nth-child(2)",
						{ rotate: "180deg", scale: 0, backgroundColor: "#fff" },
						{ at: "<" },
					],
					[
						"li:nth-child(3)",
						{ rotate: "315deg", y: -10, backgroundColor: "#fff" },
						{ at: "<" },
					],
			  ]
			: [
					["li:nth-child(1)", { rotate: 0, y: 0, backgroundColor: "#000" }],
					[
						"li:nth-child(2)",
						{ rotate: 0, scale: 1, backgroundColor: "#000" },
						{ at: "<" },
					],
					[
						"li:nth-child(3)",
						{ rotate: 0, y: 0, backgroundColor: "#000" },
						{ at: "<" },
					],
			  ];
		animate([...menuAnimations], { duration: 0.7, ease: "linear" });
	}, [animate, isOpen]);

	return (
		<div>
			<div className="relative z-50 flex items-center gap-4 p-5">
				<Button ref={scope} onClick={toggleSidebar}>
					<ul>
						<motion.li
							className="my-2 h-[3px] w-7 rounded-full bg-black"
							initial={{ rotate: "45deg", y: 20 }}
							animate={{ rotate: 0, y: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						/>
						<motion.li
							className="my-2 h-[3px] w-7 rounded-full bg-black"
							initial={{ rotate: "180deg", scaleX: 1.3, x: 12 }}
							animate={{ rotate: 0, scaleX: 1, x: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						/>
						<motion.li
							className="my-2 h-[3px] w-7 rounded-full bg-black"
							initial={{ rotate: "-45deg", y: -20 }}
							animate={{ rotate: 0, y: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						/>
					</ul>
				</Button>
				<p className="pointer-events-none select-none text-5xl text-white">
					Menu
				</p>
			</div>
			{/* navigation full page */}
			<motion.div
				className="pointer-events-none fixed left-0 top-0 z-40 h-full w-full bg-gray-950 "
				variants={PageSlide}
				initial="exit"
				animate={isOpen ? "animate" : "exit"}
			>
				<div className="mx-auto w-full max-w-5xl p-5">
					<nav className="mt-[200px] w-full max-w-3xl">
						{[
							{ title: "Articles", href: "/" },
							{ title: "Projects", href: "/projects" },
						].map((link, index) => (
							<Link key={index} href={link.href} onClick={toggleSidebar}>
								<motion.div
									className="my-4 h-[1px] w-full bg-white"
									variants={slideInLeft}
								/>
								<motion.p
									className="text-4xl text-white"
									variants={slideInLeft}
								>
									{link.title}
								</motion.p>
							</Link>
						))}
					</nav>
				</div>
			</motion.div>
			{/* navigation bar */}
			<nav className="flex items-center gap-4 border-t">
				{[
					{ title: "Articles", href: "/" },
					{ title: "Projects", href: "/projects" },
				].map((Links, index) => (
					<Link
						key={index}
						href={Links.href}
						className="cursor-pointer p-2 tracking-wider"
						activeProps="font-bold border-black border-t-2"
					>
						{Links.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
