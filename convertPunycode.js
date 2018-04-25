const punycode = require(`punycode`);

class convertPunycode {
  static isParameterValid(string) {
    if (typeof string !== `string`) {
      throw new TypeError(`Argument must be a string.`);
    }

    return true;
  }

  static toUnicode(string) {
    return this.isParameterValid(string) && punycode.toUnicode(string);
  }

  static toASCII(string) {
    return this.isParameterValid(string) && punycode.toASCII(string)
  }
}

module.exports = convertPunycode;
