/**
 * This is the simplest node http server with no dependencies
 */

import { Server } from "./utils/server";

const vanillaServer = new Server();
vanillaServer.init();
