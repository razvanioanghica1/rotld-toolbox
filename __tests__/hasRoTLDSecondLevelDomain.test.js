const hasRoTLDSecondLevelDomain = require("../hasRoTLDSecondLevelDomain");

test("should throw without argument", () => {
  expect(() => hasRoTLDSecondLevelDomain()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => hasRoTLDSecondLevelDomain("")).toThrow();
});

test("should return true on domain name with RoTLD second level domain", () => {
  expect(hasRoTLDSecondLevelDomain(`subdomeniu.ș.www.ro`)).toBe(true);
});

test("should return false on domain name without RoTLD second level domain", () => {
  expect(hasRoTLDSecondLevelDomain("subdomeniu.ș.ro")).toBe(false);
});
