import ProjectCard from "#/components/ProjectCard";
import { Project } from "#/types/types";
import { slideInLeft } from "#/util/animation";
import { motion } from "framer-motion";

export function Page({ projects }: { projects: Project[] }) {
	return (
		<motion.div variants={slideInLeft} className="flex-1 border">
			<div className="flex gap-4 items-center p-5">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</motion.div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export async function onBeforeRender() {
	// await sleep(1000); // Simulate slow network
	const projects = [
		{ title: "project-1", url: "site" },
		{ title: "project-2", url: "site" },
		{ title: "project-3", url: "site" },
	];

	return {
		pageContext: {
			pageProps: {
				projects: projects,
			},
			// The page's title
			documentProps: {
				title: "All projects",
				description: `This page has ${projects.length} projects to browse`,
			},
		},
	};
}
