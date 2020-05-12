require("dotenv").config();
const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withSourceMaps = require("@zeit/next-source-maps")();
const withTM = require("next-transpile-modules")([
  "@sentrei/common",
  "@sentrei/ui",
]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const {StatsWriterPlugin} = require("webpack-stats-plugin");

const withBundleStats = require("next-plugin-bundle-stats")({
  baseline: true,
  compare: false,
  json: true,
});

const withOptimizedImages = require("next-optimized-images")({
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpeg", "png", "ico", "svg", "webp", "gif"],
  optimizeImages: true,
  optimizeImagesInDev: true,
  defaultImageLoader: "img-loader",
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {},
  webp: {
    preset: "default",
    quality: 75,
  },
});

const aliases = {
  "@assets": path.join(__dirname, "assets"),
  "@sentrei/common": path.join(__dirname, "../common"),
  "@sentrei/ui": path.join(__dirname, "../ui"),
  "@sentrei/web": path.join(__dirname, "src"),
};

const nextConfig = {
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    SENTREI_VERSION: process.env.SENTREI_VERSION,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
    SENTRY_RELEASE: process.env.SENTRY_RELEASE,
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    config.resolve.modules.push(path.resolve("./"));
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
    config.resolve.symlinks = true;
    return config;
  },
};

module.exports = withPlugins(
  [
    [withOptimizedImages],
  ],
  nextConfig,
);
