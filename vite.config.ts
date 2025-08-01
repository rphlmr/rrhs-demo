import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		reactRouterHonoServer({ serverEntryPoint: "./app/server/index.ts" }),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
});
