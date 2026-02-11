import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tanstackRouter({
            target: "react",
            routesDirectory: "./src/app/routes",
            generatedRouteTree: "./src/app/route-tree.generated.ts",
            autoCodeSplitting: true,
        }),
        tsconfigPaths({
            /**
             * When true, parsing errors encountered while loading tsconfig files will be ignored.
             * This is useful if you have a monorepo with multiple tsconfig files,
             * and you don't want to see errors for the ones that aren't relevant to the current project.
             */
            ignoreConfigErrors: true,
        }),
        react(),
    ],
});
