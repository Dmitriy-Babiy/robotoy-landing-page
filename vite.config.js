import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    base: isProduction ? "/robotoy-landing-page/" : "/",
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  };
});
