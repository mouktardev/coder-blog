import { cn } from "#/util/util";

type Props = {
	src?: string;
	alt?: string;
	aspectRatio?: "portrait" | "square" | "rectangle";
	width?: number;
	height?: number;
	className?: string;
};
export default function Image({
	src,
	alt,
	aspectRatio = "portrait",
	width,
	height,
	className,
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
			alt={alt}
			src={src}
			width={width}
			height={height}
			draggable="false"
		/>
	);
}
