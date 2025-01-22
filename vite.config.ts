import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const prefix = "monaco-editor/esm/vs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jukidevtools/",
	plugins: [
		TanStackRouterVite(),
		viteReact(),
		VitePWA({
			registerType: "autoUpdate",
			workbox: {
				globPatterns: ["**/*"],
				maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
			},
			manifest: {
				name: "Jukidevtools",
				short_name: "Jukidevtools",
				description: "Some cool tools and utilities for developers",
				theme_color: "#1677ff",
				icons: [
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/pwa-maskable-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/pwa-maskable-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
		}),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					jsonWorker: [`${prefix}/language/json/json.worker`],
					cssWorker: [`${prefix}/language/css/css.worker`],
					htmlWorker: [`${prefix}/language/html/html.worker`],
					tsWorker: [`${prefix}/language/typescript/ts.worker`],
					editorWorker: [`${prefix}/editor/editor.worker`],
				},
			},
		},
	},
});
