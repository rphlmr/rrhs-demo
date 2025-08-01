import { createHonoServer } from "react-router-hono-server/bun";
import { contextStorageMiddleware } from "./middleware/context";

export default await createHonoServer({
  defaultLogger: true,
  configure: (server) => {
    server.use("*", contextStorageMiddleware());
  },
});
