const hasRoTLDTopLevelDomain = require("../hasRoTLDTopLevelDomain");

test("should throw without argument", () => {
  expect(() => hasRoTLDTopLevelDomain()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => hasRoTLDTopLevelDomain("")).toThrow();
});

test("should throw with invalid domain", () => {
  expect(() => hasRoTLDTopLevelDomain("hellothisisdog")).toThrow();
});

test("should return true on domain with Romanian tld", () => {
  expect(hasRoTLDTopLevelDomain("subdomeniu.ș.ro")).toBe(true);
});

test("should return false on domain without Romanian tld", () => {
  expect(hasRoTLDTopLevelDomain("subdomeniu.ș.com")).toBe(false);
});
