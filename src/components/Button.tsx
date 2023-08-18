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
				animate={pressing ? "pressed" : "unpressed"}
				initial={false}
				transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
				className={cn(
					"rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
					className
				)}
				{...props}
			/>
		);
	}
);
