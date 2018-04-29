const getRoTLDDomainLabels = require("../getRoTLDDomainLabels");

test("should throw without argument", () => {
  expect(() => getRoTLDDomainLabels()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getRoTLDDomainLabels("")).toThrow();
});

test("should throw on domain without romanian tld", () => {
  expect(() => getRoTLDDomainLabels("example.com")).toThrow();
});

test("should return object containing domain and tld on domain with romanian tld", () => {
  expect(getRoTLDDomainLabels("example.ro")).toEqual({
    domain: "example",
    tld: "ro"
  });
});

test("should return object containing domain, tld and subdomain on domain with romanian tld and RoTLD subdomain", () => {
  expect(getRoTLDDomainLabels("example.com.ro")).toEqual({
    domain: "example",
    tld: "ro",
    tldSubdomain: "com"
  });
});
