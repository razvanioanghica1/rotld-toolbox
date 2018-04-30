const getHostnameFromURL = require("../getHostnameFromURL");

test("should throw without argument", () => {
  expect(() => getHostnameFromURL()).toThrow();
});

test("should throw on empty argument", () => {
  expect(() => getHostnameFromURL("")).toThrow();
});

test("should throw on invalid URL", () => {
  expect(() => getHostnameFromURL("mailto:exemplu@ș.com")).toThrow();
});

test("should return domain name on valid URL", () => {
  expect(
    getHostnameFromURL(
      "https://user:pass@subdomeniu.ș.com:8080/p/a/t/h?query=string#hash"
    )
  ).toBe("subdomeniu.xn--yla.com");
});
