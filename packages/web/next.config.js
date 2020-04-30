const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules")(["@sentrei/ui"]);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withBundleStats = require("next-plugin-bundle-stats")({
  json: true,
});

const nextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = withPlugins(
  [[withBundleAnalyzer], [withBundleStats], [withSass], [withTM]],
  nextConfig,
);
