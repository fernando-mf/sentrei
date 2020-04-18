module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      }
    };
  },
  webpack: config => {
    config.resolve.extensions = [".web.js", ".js", ".jsx", ".json"];

    return config;
  }
};
