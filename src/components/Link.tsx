import { cn } from "#/util/util";
import { usePageContext } from "../hook/usePageContext";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
	className?: string;
	activeProps?: string;
};

function Link({ href, className, activeProps, ...props }: Props) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;
	const isActive =
		href === "/" ? urlPathname === href : urlPathname.startsWith(href);
	return (
		<a
			href={href}
			className={cn(isActive ? activeProps : "", className)}
			{...props}
		/>
	);
}

export { Link };
