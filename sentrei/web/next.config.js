module.exports = {
  webpack: config => {
    config.resolve.extensions = [".web.js", ".js", ".jsx", ".json"];

    return config;
  },
};
