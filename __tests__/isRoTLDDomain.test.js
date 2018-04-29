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

test("should return true on domain with romanian tld", () => {
  expect(isRoTLDDomain("subdomain.example.ro")).toBe(true);
});

test("should return false on domain without romanian tld", () => {
  expect(isRoTLDDomain("subdomain.example.com")).toBe(false);
});
