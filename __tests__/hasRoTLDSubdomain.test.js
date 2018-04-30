const hasRoTLDSubdomain = require("../hasRoTLDSubdomain");

test("should throw without argument", () => {
  expect(() => hasRoTLDSubdomain()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => hasRoTLDSubdomain("")).toThrow();
});

test("should return true on domain name with RoTLD subdomain", () => {
  expect(hasRoTLDSubdomain(`subdomeniu.ș.www.ro`)).toBe(true);
});

test("should return false on domain name without RoTLD subdomain", () => {
  expect(hasRoTLDSubdomain("subdomeniu.ș.ro")).toBe(false);
});
