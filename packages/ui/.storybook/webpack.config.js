const path = require("path");

const aliases = {
  "@sentrei/common": path.join(__dirname, "../../common/dist"),
  "@sentrei/ui": path.join(__dirname, "../src"),
};

module.exports = ({config}) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  };

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    use: [
      require.resolve("ts-loader"),
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    ],
  });

  // Temporary for next-i18n core-js 2
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
          ],
        },
      },
    ],
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
