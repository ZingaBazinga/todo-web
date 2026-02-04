import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
    plugins: [
        tanstackRouter({
            target: "react",
            routesDirectory: "./src/app/routes",
            generatedRouteTree: "./src/app/route-tree.generated.ts",
            autoCodeSplitting: true,
        }),
        react(),
    ],
});
