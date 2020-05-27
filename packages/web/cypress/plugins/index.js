const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  // TODO: Fix cypress typescript bug #1916
  on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
};
