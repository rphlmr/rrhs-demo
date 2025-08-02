import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  console.log(`Vite mode: ${mode}`);
  return {
    plugins: [
      reactRouterHonoServer(
        mode === "bun"
          ? { runtime: "bun", serverEntryPoint: "./app/server/index.bun.ts" }
          : { serverEntryPoint: "./app/server/index.ts" }
      ),
      tailwindcss(),
      reactRouter(),
      tsconfigPaths(),
    ],
  };
});
