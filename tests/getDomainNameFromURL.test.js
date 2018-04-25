const getDomainNameFromURL = require(`../getDomainNameFromURL`);

test(`getDomainNameFromURL without argument`, () => {
  expect(() => getDomainNameFromURL()).toThrow();
});

test(`getDomainNameFromURL with empty argument`, () => {
  expect(() => getDomainNameFromURL(``)).toThrow();
});

test(`getDomainNameFromURL with valid argument`, () => {
  expect(
    getDomainNameFromURL(
      `https://user:pass@subdomain.example.com:8080/p/a/t/h?query=string#hash`
    )
  ).toBe(`subdomain.example.com`);
});

test(`getDomainNameFromURL with invalid argument`, () => {
  expect(() => getDomainNameFromURL(`mailto:example@example.com`)).toThrow();
});

test(`getDomainNameFromURL with invalid argument containing an IP address`, () => {
  expect(() =>
    getDomainNameFromURL(`http://127.0.0.1`)
  ).toThrow();
});
