const getRoTLDDomainLabels = require("../getRoTLDDomainLabels");

test("should throw without argument", () => {
  expect(() => getRoTLDDomainLabels()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getRoTLDDomainLabels("")).toThrow();
});

test("should throw on domain without Romanian tld", () => {
  expect(() => getRoTLDDomainLabels("ș.com")).toThrow();
});

test("should return object containing domain and tld on domain with Romanian tld", () => {
  expect(getRoTLDDomainLabels("ș.ro")).toEqual({
    domain: "xn--yla",
    tld: "ro"
  });
});

test("should return object containing domain, tld and second level domain on domain with Romanian tld and RoTLD second level domain", () => {
  expect(getRoTLDDomainLabels("ș.rec.ro")).toEqual({
    domain: "xn--yla",
    tldSecondLevelDomain: "rec",
    tld: "ro"
  });
});
