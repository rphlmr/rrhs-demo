import type { Config } from "@react-router/dev/config";

export default {
	ssr: true,
	routeDiscovery: { mode: "initial" },
	future: {
		unstable_middleware: true,
		unstable_viteEnvironmentApi: true,
		unstable_optimizeDeps: true,
	},
} satisfies Config;
