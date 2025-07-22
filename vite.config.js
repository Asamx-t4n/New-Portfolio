import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/New-Portfolio/", // 👈 use your repo name here
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
	},
});
