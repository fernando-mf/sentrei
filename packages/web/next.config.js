const path = require("path");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withTM = require("next-transpile-modules")(["@sentrei/ui"]);

const aliases = {
  "@sentrei/ui": path.join(__dirname, "../ui"),
};

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    return config;
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = withPlugins(
  [[withBundleAnalyzer], [withSass], [withTM]],
  nextConfig,
);
