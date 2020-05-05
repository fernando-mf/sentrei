const path = require("path");

const aliases = {
  "@sentrei/ui": path.join(__dirname, "../src"),
};

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: {
          configFileName: "tsconfig.test.json",
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
