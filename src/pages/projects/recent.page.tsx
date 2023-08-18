import { slideInLeft } from "#/util/animation";
import { motion } from "framer-motion";

export function Page() {
	return (
		<motion.div
			variants={slideInLeft}
			className="flex justify-center items-center flex-1 h-full border"
		>
			<p className="text-2xl uppercase font-thin">recent</p>
		</motion.div>
	);
}
