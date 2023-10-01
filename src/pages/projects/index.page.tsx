import ProjectCard from "#/components/ProjectCard";
import { Project } from "#/schema/ArticleSchema";

export function Page({ projects }: { projects: Project[] }) {
	return (
		<div className="grid w-full gap-4 p-5 lg:grid-cols-3">
			{projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
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
			// The page's title & description
			documentProps: {
				title: "All projects",
				description: `This page has ${projects.length} projects to browse`,
			},
		},
	};
}
