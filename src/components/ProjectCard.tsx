import { Project } from "#/schema/ArticleSchema";

type Porps = {
	project: Project;
};
export default function ProjectCard({ project }: Porps) {
	return (
		<div className="rounded-md border bg-white p-5 shadow-md @container">
			<h1 className="text-lg font-medium leading-9 tracking-tight ">
				{project.title}
			</h1>
			<p className="text-sm">Insert here description.</p>
		</div>
	);
}
