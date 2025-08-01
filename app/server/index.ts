import { createHonoServer } from "react-router-hono-server/node";
import { contextStorageMiddleware } from "./middleware/context";

export default await createHonoServer({
	defaultLogger: true,
	configure: (server) => {
		server.use("*", contextStorageMiddleware());
	},
	listeningListener: (info) => {
		console.info(`🚀 Server started on ${info.address}:${info.port}`);
	},
});
