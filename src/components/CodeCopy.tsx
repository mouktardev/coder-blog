import { cn } from "#/util/util";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { ReactElement, ReactNode, useState } from "react";
import { Button } from "./Button";

type Props = {
	children: ReactNode[];
};

export default function CodeCopyBtn({ children }: Props) {
	const [copyOk, setCopyOk] = useState(false);

	const firstChild = children[0] as ReactElement;

	const handleClick = () => {
		navigator.clipboard.writeText(firstChild.props.children);
		setCopyOk(true);
		setTimeout(() => {
			setCopyOk(false);
		}, 2000);
	};

	return (
		<Button
			className={cn(
				"absolute right-3 top-3 cursor-pointer rounded-lg p-2 hover:bg-white/10",
				copyOk ? "text-green-500" : ""
			)}
			onClick={handleClick}
		>
			{copyOk ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
		</Button>
	);
}
