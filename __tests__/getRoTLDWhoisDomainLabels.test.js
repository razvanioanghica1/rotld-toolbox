const getRoTLDWhoisDomainLabels = require("../getRoTLDWhoisDomainLabels");

test("should throw without argument", () => {
  expect(() => getRoTLDWhoisDomainLabels()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getRoTLDWhoisDomainLabels("")).toThrow();
});

test("should throw on domain without Romanian tld", () => {
  expect(() => getRoTLDWhoisDomainLabels("ș.com")).toThrow();
});

test("should return object containing domain and tld on domain with Romanian tld", () => {
  expect(getRoTLDWhoisDomainLabels("ș.ro")).toEqual({
    domain: "xn--yla",
    tld: "ro"
  });
});

test("should return object containing subdomain, domain and tld on domain with subdomain and Romanian tld", () => {
  expect(getRoTLDWhoisDomainLabels("șubdomeniu.ș.ro")).toEqual({
    subdomain: "xn--ubdomeniu-4ld",
    domain: "xn--yla",
    tld: "ro"
  });
});

test("should return object containing domain, tld and second level domain on domain with Romanian tld and RoTLD second level domain", () => {
  expect(getRoTLDWhoisDomainLabels("ș.rec.ro")).toEqual({
    domain: "xn--yla",
    tldSecondLevelDomain: "rec",
    tld: "ro"
  });
});

test("should return object containing subdomain, domain, tld and second level domain on domain with subdomain, Romanian tld and RoTLD second level domain", () => {
  expect(getRoTLDWhoisDomainLabels("subdomeniu.șubdomeniu.ș.rec.ro")).toEqual({
    subdomain: "xn--ubdomeniu-4ld",
    domain: "xn--yla",
    tldSecondLevelDomain: "rec",
    tld: "ro"
  });
});
