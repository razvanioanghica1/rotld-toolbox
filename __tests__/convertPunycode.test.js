const convertPunycode = require(`../convertPunycode`);

test(`should throw without argument`, () => {
  expect(() => convertPunycode.toUnicode()).toThrow();
});

test(`should return Unicode encoded string on Unicode encoded string`, () => {
  expect(convertPunycode.toUnicode(`ș.ro`)).toBe(`ș.ro`);
});

test(`should return Unicode encoded string on ASCII encoded string`, () => {
  expect(convertPunycode.toUnicode(`xn--yla.ro`)).toBe(`ș.ro`);
});

test(`should return ASCII encoded string on ASCII encoded string`, () => {
  expect(convertPunycode.toASCII(`xn--yla.ro`)).toBe(`xn--yla.ro`);
});

test(`should return ASCII encoded string on Unicode encoded string`, () => {
  expect(convertPunycode.toASCII(`ș.ro`)).toBe(`xn--yla.ro`);
});
