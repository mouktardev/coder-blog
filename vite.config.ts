import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ssr({ prerender: true })],
	resolve: {
		alias: [
			{
				find: "#",
				replacement: fileURLToPath(new URL("./src", import.meta.url)),
			},
		],
	},
});
