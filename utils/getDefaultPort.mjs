import { getArgs } from "./getArgs.mjs";

const getDefaultPort = () => {
	const args = getArgs();
	if ("--port" in args) {
		const port = Number(args["--port"]);
		if (!isNaN(port)) {
			return port;
		}
	}
	return 8080;
};

export { getDefaultPort };
