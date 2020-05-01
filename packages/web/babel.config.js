const plugins = [];
if (process.env.NODE_ENV === "test") {
  plugins.push("istanbul");
}
module.exports = {
  plugins: plugins,
  presets: ["next/babel"],
};
