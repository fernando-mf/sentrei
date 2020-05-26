const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = on => {
  // require("@cypress/code-coverage/task")(on, config);
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  // on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));
};
