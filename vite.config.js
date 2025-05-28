import { defineConfig } from "vite";

import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "solid", autoCodeSplitting: true }),
		solidPlugin(),
		tailwindcss(),
	],
});
