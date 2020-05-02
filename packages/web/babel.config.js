const plugins = [
  [
    "styled-components",
    {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  ],
];
if (process.env.NODE_ENV === "test") {
  plugins.push("istanbul");
}
module.exports = {
  plugins: plugins,
  presets: ["next/babel"],
};
