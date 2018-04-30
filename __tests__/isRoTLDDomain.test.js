const isRoTLDDomain = require("../isRoTLDDomain");

test("should throw without argument", () => {
  expect(() => isRoTLDDomain()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => isRoTLDDomain("")).toThrow();
});

test("should throw with invalid domain", () => {
  expect(() => isRoTLDDomain("hellothisisdog")).toThrow();
});

test("should return true on domain with Romanian tld", () => {
  expect(isRoTLDDomain("subdomeniu.ș.ro")).toBe(true);
});

test("should return false on domain without Romanian tld", () => {
  expect(isRoTLDDomain("subdomeniu.ș.com")).toBe(false);
});
