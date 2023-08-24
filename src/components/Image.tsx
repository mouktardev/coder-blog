import { cn } from "#/util/util";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	aspectRatio?: "portrait" | "square" | "rectangle";
	className?: string;
};

export default function Image({
	aspectRatio = "portrait",
	className,
	...props
}: Props) {
	return (
		<img
			className={cn(
				"object-cover",
				aspectRatio === "portrait"
					? "aspect-[3/4]"
					: aspectRatio === "rectangle"
					? "aspect-[3/2]"
					: "square",
				className
			)}
			{...props}
		/>
	);
}
