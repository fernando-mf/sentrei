module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      test: {
        plugins: ["istanbul"],
      },
    },
    presets: ["next/babel"],
  };
};
