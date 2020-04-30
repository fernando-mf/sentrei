const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const withTM = require("next-transpile-modules")(["@sentrei/ui"]);

const withConfig = nextRuntimeDotenv({
  public: ["API_URL", "API_KEY"],
});

const nextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = withConfig(
  withPlugins([[withBundleAnalyzer], [withSass], [withTM]], nextConfig),
);
