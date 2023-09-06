import { Project } from "#/schema/ArticleSchema";

type Porps = {
	project: Project;
};
export default function ProjectCard({ project }: Porps) {
	return (
		<div className="@container bg-white rounded-md shadow-md border p-5">
			<h1 className="text-lg font-medium leading-9 tracking-tight ">
				{project.title}
			</h1>
			<p className="text-sm">Insert here description.</p>
		</div>
	);
}
