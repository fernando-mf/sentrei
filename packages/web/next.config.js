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
    "FIREBASE_API_KEY",
    "FIREBASE_AUTH_DOMAIN",
    "FIREBASE_DATABASE_URL",
    "FIREBASE_PROJECT_ID",
    "FIREBASE_STORAGE_BUCKET",
    "FIREBASE_MESSAGING_SENDER_ID",
    "FIREBASE_APP_ID",
    "FIREBASE_MEASUREMENT_ID",
    "SENTRY_DSN",
  ],
});

const aliases = {
  "@sentrei/ui": path.join(__dirname, "../ui"),
  "@sentrei/web": path.join(__dirname, "src"),
};

const nextConfig = {
  webpack: (config, {isServer}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
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
    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  },
};

module.exports = withConfig(
  withPlugins(
    [[withBundleAnalyzer], [withBundleStats], [withCSS], [withSass], [withTM]],
    nextConfig,
  ),
);
