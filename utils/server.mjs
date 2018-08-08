import { createServer } from "http";

import { getDefaultPort } from "./getDefaultPort";

class Server {
	constructor() {
		this.server = createServer((req, resp) => {
			if (req.url === "/favicon.ico") {
				resp.end();
			}
			const body = JSON.stringify({ hello: "world" });
			resp.writeHead(200, { "content-type": "application/json" });
			resp.end(body);
		});
	}

	init({ port = getDefaultPort() } = {}) {
		this.server.listen(port, () => {
			console.log(`Vanilla NODEJS http server listening on port: ${port}`);
		});
	}
}

export { Server };
