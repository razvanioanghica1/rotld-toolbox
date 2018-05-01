const getRoTLDDomainFromHostname = require("../getRoTLDDomainFromHostname");

test("should throw without argument", () => {
  expect(() => getRoTLDDomainFromHostname()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getRoTLDDomainFromHostname("")).toThrow();
});

test("should throw with invalid hostname", () => {
  expect(() => getRoTLDDomainFromHostname("hellothisisdog")).toThrow();
});

test("should throw on hostname without Romanian tld", () => {
  expect(() => getRoTLDDomainFromHostname("ș.com")).toThrow();
});

test("should return domain on hostname with Romanian tld", () => {
  expect(getRoTLDDomainFromHostname("subdomeniu.ș.ro")).toEqual("xn--yla.ro");
});

test("should return domain with RoTLD second level domain on hostname with Romanian tld and RoTLD second level domain", () => {
  expect(getRoTLDDomainFromHostname("subdomeniu.ș.www.ro")).toEqual(
    "xn--yla.www.ro"
  );
});
