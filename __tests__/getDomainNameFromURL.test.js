const getDomainNameFromURL = require("../getDomainNameFromURL");

test("should throw without argument", () => {
  expect(() => getDomainNameFromURL()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getDomainNameFromURL("")).toThrow();
});

test("should throw on invalid URL", () => {
  expect(() => getDomainNameFromURL("mailto:exemplu@ș.com")).toThrow();
});

test("should return domain name on valid URL", () => {
  expect(
    getDomainNameFromURL(
      "https://user:pass@subdomeniu.ș.com:8080/p/a/t/h?query=string#hash"
    )
  ).toBe("subdomeniu.xn--yla.com");
});
