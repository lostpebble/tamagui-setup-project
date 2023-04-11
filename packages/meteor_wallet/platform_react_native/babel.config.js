module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      // [
      //   require.resolve("babel-plugin-module-resolver"),
      //   {
      //     root: ["../../../"],
      //     extensions: [".js", ".jsx", ".tsx", ".ios.js", ".android.js"],
      //   },
      // ],
      // if you want reanimated support
      // 'react-native-reanimated/plugin',
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui", "@meteorwallet/common-ui", "@meteorwallet/meteor-ui"],
          config: "./src/tamagui.config.ts",
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
        },
      ],
    ],
  };
};
