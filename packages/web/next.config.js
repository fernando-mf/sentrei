const path = require("path");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules")(["@sentrei/ui"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextRuntimeDotenv = require("next-runtime-dotenv");
const {StatsWriterPlugin} = require("webpack-stats-plugin");

const withBundleStats = require("next-plugin-bundle-stats")({
  baseline: true,
  compare: false,
  json: true,
});

const withConfig = nextRuntimeDotenv({
  public: [
    "API_KEY",
    "AUTH_DOMAIN",
    "DATABASE_URL",
    "PROJECT_ID",
    "STORAGE_BUCKET",
    "MESSAGING_SENDER_ID",
    "APP_ID",
    "MEASUREMENT_ID",
  ],
});

const aliases = {
  "@sentrei/ui": path.join(__dirname, "../ui"),
  "@sentrei/web": path.join(__dirname, "src"),
  "@sentrei/ui": require.resolve("@sentrei/ui"),
};

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
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
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
  },
};

module.exports = withConfig(
  withPlugins(
    [[withBundleAnalyzer], [withBundleStats], [withCSS], [withSass], [withTM]],
    nextConfig,
  ),
);
