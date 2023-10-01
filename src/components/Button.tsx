import { pushButton } from "#/util/animation";
import { cn } from "#/util/util";
import { MotionProps, motion } from "framer-motion";
import React, { ForwardedRef, useState } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps & {
		onStart?: () => void;
		className?: string;
	};

export const Button = React.forwardRef(
	(
		{ className, onStart, ...props }: Props,
		ref: ForwardedRef<HTMLButtonElement>
	) => {
		const [pressing, setPressing] = useState(false);

		return (
			<motion.button
				type="button"
				ref={ref}
				variants={pushButton}
				initial={false}
				animate={pressing ? "pressed" : "unpressed"}
				transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
				onTapStart={() => {
					setPressing(true);
					onStart;
				}}
				onTap={() => {
					setPressing(false);
				}}
				onTapCancel={() => {
					setPressing(false);
				}}
				className={cn(
					"focus-visible:ring-ring cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-1",
					className
				)}
				{...props}
			/>
		);
	}
);
