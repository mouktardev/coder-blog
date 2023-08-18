import { cn } from "#/util/util";
import { ReactNode } from "react";
import { usePageContext } from "../hook/usePageContext";

type Props = {
	href: string;
	children?: ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	activeProps?: string;
};

function Link({ href, children, className, activeProps, onClick }: Props) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;
	const isActive =
		href === "/" ? urlPathname === href : urlPathname.startsWith(href);
	return (
		<a
			href={href}
			className={cn(isActive ? activeProps : "", className)}
			onClick={onClick}
		>
			{children}
		</a>
	);
}

export { Link };
