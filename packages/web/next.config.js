const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules")(["@sentrei/ui"]);
const {StatsWriterPlugin} = require("webpack-stats-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withBundleStats = require("next-plugin-bundle-stats")({
  baseline: true,
  compare: false,
  json: true,
});

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@sentrei/ui": require.resolve("@sentrei/ui"),
    };
    config.plugins.push(
      new StatsWriterPlugin({
        filename: "webpack-stats.json",
        stats: {
          context: "./src",
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      }),
    );
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    config.resolve.symlinks = true;
    return config;
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = withPlugins(
  [[withBundleAnalyzer], [withBundleStats], [withSass], [withTM]],
  nextConfig,
);
