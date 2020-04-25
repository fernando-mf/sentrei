/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");

module.exports = on => {
  on("file:preprocessor", cypressTypeScriptPreprocessor);
};
