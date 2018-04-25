const getDomainNameFromUrl = require(`../getDomainNameFromUrl`);

test(`getDomainNameFromUrl without argument`, () => {
  expect(() => getDomainNameFromUrl()).toThrow();
});

test(`getDomainNameFromUrl with empty argument`, () => {
  expect(() => getDomainNameFromUrl(``)).toThrow();
});

test(`getDomainNameFromUrl with valid argument`, () => {
  expect(
    getDomainNameFromUrl(
      `https://user:pass@subdomain.example.com:8080/p/a/t/h?query=string#hash`
    )
  ).toBe(`subdomain.example.com`);
});

test(`getDomainNameFromUrl with invalid argument`, () => {
  expect(() => getDomainNameFromUrl(`mailto:example@example.com`)).toThrow();
});

test(`getDomainNameFromUrl with invalid argument containing an IP address`, () => {
  expect(() =>
    getDomainNameFromUrl(`3ffe:0b00:0000:0000:0001:0000:0000:000a`)
  ).toThrow();
});
