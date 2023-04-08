// noinspection JSUnusedGlobalSymbols

import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const shouldExtract = process.env.EXTRACT === "1";

if (shouldExtract) {
  console.log("Compiler enabled");
}

const tamaguiConfig = {
  components: ["@meteorwallet/meteor-ui", "@meteorwallet/common-ui", "tamagui"],
  config: "./src/tamagui.config.ts",
  useReactNativeWebLite: true,
};

export default defineConfig({
  clearScreen: true,
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
});
