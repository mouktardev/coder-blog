import { Variants } from "framer-motion";

export const containerLayout: Variants = {
	enter: {
		transition: {
			duration: 0.6,
			ease: "easeInOut",
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	exit: {
		transition: {
			when: "afterChildren",
			duration: 0.6,
			staggerChildren: -1,
		},
	},
};
export const PageSlide: Variants = {
	start: { x: "100%" },
	enter: {
		x: 0,
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

export const slideInTop: Variants = {
	enter: {
		y: 0,
		opacity: 1,
		transition: { ease: "easeIn" },
	},
	exit: { y: 100, opacity: 0, transition: { ease: "easeOut" } },
};

export const slideInLeft: Variants = {
	enter: {
		x: 0,
		opacity: 1,
		transition: { ease: "easeIn" },
	},
	exit: { x: 100, opacity: 0, transition: { ease: "easeOut" } },
};

export const WidthLeft: Variants = {
	start: { width: "160px" },
	enter: { width: "54px" },
	exit: {
		width: "160px",
		transition: {
			ease: "easeIn",
			delayChildren: 0.3,
		},
	},
};

export const Fade: Variants = {
	enter: {
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
