import { motion } from "framer-motion";
import { Link } from "./Link";

export function GoBack() {
	return (
		<div className="relative z-50 p-5">
			<Link href="/">
				<motion.div
					className="w-7 h-[3px] bg-black my-2 rounded-full"
					initial={{ rotate: 0, y: 0 }}
					animate={{ rotate: "45deg", y: 20 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				/>
				<motion.div
					className="w-7 h-[3px] bg-black my-2 rounded-full"
					initial={{ rotate: 0, scaleX: 1, x: 0 }}
					animate={{ rotate: "180deg", scaleX: 1.3, x: 12 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				/>
				<motion.div
					className="w-7 h-[3px] bg-black my-2 rounded-full"
					initial={{ rotate: 0, y: 0 }}
					animate={{ rotate: "-45deg", y: -20 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				/>
			</Link>
		</div>
	);
}
