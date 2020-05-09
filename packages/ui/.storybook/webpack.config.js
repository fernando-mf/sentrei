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
  config.module.rules = [
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            configFileName: "tsconfig.json",
          },
        },
      ],
    },
  ];
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
