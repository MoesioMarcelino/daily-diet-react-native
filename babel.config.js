module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@assets": ["./src/assets/index.ts"],
            "@components": ["./src/components/index.ts"],
            "@routes": ["./src/routes/index.tsx"],
            "@screens": ["./src/screens/index.ts"],
            "@styles": ["./src/styles/index.ts"],
            "@utils": ["./src/utils/index.ts"],
          },
        },
      ],
    ],
  };
};
