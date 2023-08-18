import { Project } from "#/types/types";
import { File, MoreVertical } from "lucide-react";
import { Button } from "./Button";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<div className="w-[200px] border">
			<div className="p-5">
				<File className="h-20 w-20 m-auto" strokeWidth={0.5} />
			</div>
			<div className="flex justify-between items-center p-2 border-t">
				<p className="text-lg font-medium leading-9 tracking-tight ">
					{project.title}
				</p>
				<Button>
					<MoreVertical className="h-5 w-5" />
				</Button>
			</div>
		</div>
	);
}
