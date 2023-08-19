import { slideInLeft } from "#/util/animation";
import { motion } from "framer-motion";

export function Page() {
	return (
		<motion.div
			variants={slideInLeft}
			className="flex-1 h-full flex justify-center items-center border"
		>
			<p className="text-2xl uppercase font-thin">recent</p>
		</motion.div>
	);
}
