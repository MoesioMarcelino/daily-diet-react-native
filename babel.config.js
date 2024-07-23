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
            "@constants": ["./src/constants/index.ts"],
            "@models": ["./src/models/index.ts"],
            "@routes": ["./src/routes/index.tsx"],
            "@screens": ["./src/screens/index.ts"],
            "@storage": ["./src/storage/index.ts"],
            "@styles": ["./src/styles/index.ts"],
            "@utils": ["./src/utils/index.ts"],
          },
        },
      ],
    ],
  };
};
