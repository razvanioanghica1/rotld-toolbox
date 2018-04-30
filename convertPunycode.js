// Import userland punycode module not deprecated core
// https://github.com/bestiejs/punycode.js/issues/79
const punycode = require("punycode/");

const isParameterValid = string => {
  if (typeof string !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  return true;
};

const toASCII = string => isParameterValid(string) && punycode.toASCII(string);

const toUnicode = string =>
  isParameterValid(string) && punycode.toUnicode(string);

exports.toUnicode = toUnicode;
exports.toASCII = toASCII;
