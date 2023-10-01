import { Variants } from "framer-motion";

export const containerLayout: Variants = {
	animate: {
		transition: {
			// duration: 0.6,
			ease: "easeInOut",
			// when: "beforeChildren",
			staggerChildren: 0.5,
			staggerDirection: -1,
		},
	},
	// exit: {
	// 	transition: {
	// 		when: "afterChildren",
	// 		duration: 0.6,
	// 		staggerChildren: -1,
	// 	},
	// },
};
export const PageSlide: Variants = {
	initial: { x: "100%" },
	animate: {
		x: 0,
		pointerEvents: "auto",
		transition: {
			duration: 0.6,
			ease: "easeInOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	exit: {
		x: "-100%",
		transition: {
			when: "afterChildren",
			duration: 0.6,
			staggerChildren: -1,
		},
	},
};
export const PageSlideUp: Variants = {
	initial: { y: "100%" },
	exit: {
		y: "-100%",
		transition: {
			when: "afterChildren",
			duration: 0.6,
			staggerChildren: -1,
		},
	},
};

export const slideInTop: Variants = {
	initial: { y: -100, opacity: 0, transition: { ease: "easeOut" } },
	animate: {
		y: 0,
		opacity: 1,
		transition: { ease: "easeIn" },
	},
	exit: { y: 100, opacity: 0, transition: { ease: "easeOut" } },
};

export const slideInLeft: Variants = {
	animate: {
		x: 0,
		opacity: 1,
		transition: { ease: "easeIn" },
	},
	exit: { x: 100, opacity: 0, transition: { ease: "easeOut" } },
};

export const WidthLeft: Variants = {
	initial: { width: "160px" },
	animate: { width: "54px" },
	exit: {
		width: "160px",
		transition: {
			ease: "easeIn",
			delayChildren: 0.3,
		},
	},
};

export const Fade: Variants = {
	animate: {
		opacity: 1,
		display: "block",
		transition: {
			delay: 0.3,
		},
	},
	exit: { opacity: 0, display: "none" },
};

export const pushButton: Variants = {
	unpressed: {
		scale: [null, 0.85, 1],
		opacity: 1,
	},
	pressed: {
		scale: 0.85,
		opacity: 0.7,
		transition: {
			type: "spring",
			duration: 0.3,
			bounce: 0.5,
		},
	},
};
