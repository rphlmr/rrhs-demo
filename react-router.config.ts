import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  routeDiscovery: { mode: "initial" },
  future: {
    unstable_middleware: true,
    unstable_viteEnvironmentApi: false, // This is buggy for Bun
    unstable_optimizeDeps: true,
  },
} satisfies Config;
