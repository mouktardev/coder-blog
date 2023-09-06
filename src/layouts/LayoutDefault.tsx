import { GoBack } from "#/components/GoBack";
import { Loading } from "#/components/Loading";
import MainMenu from "#/components/MainMenu";
import { usePageContext } from "#/hook/usePageContext";
import { LayoutDashboard } from "#/layouts/LayoutDashboard";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function LayoutDefault({ children }: Props) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;
	return (
		<main className="w-screen">
			<section className="parent relative w-full max-w-5xl mx-auto">
				<Loading />
				<AnimatePresence initial={false} mode="wait">
					{urlPathname.startsWith("/posts") ? <GoBack /> : <MainMenu />}
				</AnimatePresence>
				{urlPathname.startsWith("/projects") ? (
					<LayoutDashboard url={urlPathname}>{children}</LayoutDashboard>
				) : (
					<AnimatePresence initial={false} mode="popLayout">
						<div key={urlPathname}>{children}</div>
					</AnimatePresence>
				)}
			</section>
		</main>
	);
}
