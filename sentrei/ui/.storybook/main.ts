import * as path from "path";
import * as webpack from "webpack";

module.exports = {
  stories: ["../src/client/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config: webpack.Configuration) => {
    // do mutation to the config
    config.module?.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json",
          },
        },
        "react-docgen-typescript-loader",
      ],
      include: [path.resolve(__dirname, "../src")],
    });
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.performance = false;
    return config;
  },
};
