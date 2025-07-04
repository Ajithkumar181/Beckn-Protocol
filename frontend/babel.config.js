module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./frontend"],
          alias: {
            "@": "./",
            "@components": "./components",
            "@assets": "./assets",
            "@app": "./app",
          },
        },
      ],
    ],
  };
};
