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
