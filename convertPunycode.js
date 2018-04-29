// Import userland punycode module not deprecated core
// https://github.com/bestiejs/punycode.js/issues/79
const punycode = require("punycode/");

const isParameterValid = string => {
  if (typeof string !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  return true;
};

exports.toUnicode = string => {
  return isParameterValid(string) && punycode.toUnicode(string);
};

exports.toASCII = string => {
  return isParameterValid(string) && punycode.toASCII(string);
};
