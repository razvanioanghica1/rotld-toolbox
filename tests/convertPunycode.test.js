const convertPunycode = require(`../convertPunycode`);

test(`convertPunycode without argument`, () => {
  expect(() => convertPunycode()).toThrow();
});

test(`convertPunycode with empty argument`, () => {
  expect(() => convertPunycode(``)).toThrow();
});

test(`convertPunycode with valid argument to Unicode`, () => {
  expect(convertPunycode.toUnicode(`ș.ro`)).toBe(`ș.ro`);
});

test(`convertPunycode with valid argument to ASCII`, () => {
  expect(convertPunycode.toASCII(`ș.ro`)).toBe(`xn--yla.ro`);
});
