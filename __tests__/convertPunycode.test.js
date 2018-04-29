const { toUnicode, toASCII } = require("../convertPunycode");

test("toUnicode should throw without argument", () => {
  expect(() => toUnicode()).toThrow();
});

test("toASCII should throw without argument", () => {
  expect(() => toUnicode()).toThrow();
});

test("should return Unicode encoded string on Unicode encoded string", () => {
  expect(toUnicode("ș.ro")).toBe("ș.ro");
});

test("should return Unicode encoded string on ASCII encoded string", () => {
  expect(toUnicode("xn--yla.ro")).toBe("ș.ro");
});

test("should return ASCII encoded string on ASCII encoded string", () => {
  expect(toASCII("xn--yla.ro")).toBe("xn--yla.ro");
});

test("should return ASCII encoded string on Unicode encoded string", () => {
  expect(toASCII("ș.ro")).toBe("xn--yla.ro");
});
