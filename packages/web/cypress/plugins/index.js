/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = (on, config) => {
  on("file:preprocessor", cypressTypeScriptPreprocessor);
  on("task", require("@cypress/code-coverage/task"));
  return config;
};
