const getDomainNameFromURL = require("../getDomainNameFromURL");

test("should throw without argument", () => {
  expect(() => getDomainNameFromURL()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getDomainNameFromURL("")).toThrow();
});

test("should throw on invalid URL", () => {
  expect(() => getDomainNameFromURL("mailto:example@example.com")).toThrow();
});

test("should return domain name on valid URL", () => {
  expect(
    getDomainNameFromURL(
      "https://user:pass@subdomain.example.com:8080/p/a/t/h?query=string#hash"
    )
  ).toBe("subdomain.example.com");
});
