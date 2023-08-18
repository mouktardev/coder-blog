type Props = {
	is404: boolean;
	errorTitle?: string;
	errorDescription?: string;
};

export function Page({ is404, errorTitle, errorDescription }: Props) {
	if (is404) {
		errorTitle ??= "404 Page Not Found";
		errorDescription ??= "This page could not be found.";
	} else {
		errorTitle ??= "500 Internal Error";
		errorDescription ??= "Something went wrong.";
	}
	return (
		<>
			<h1>{errorTitle}</h1>
			<p>{errorDescription}</p>
		</>
	);
}
