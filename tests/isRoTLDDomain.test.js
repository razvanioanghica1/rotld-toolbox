const isRoTLDDomain = require(`../isRoTLDDomain`);

test(`isRoTLDDomain without argument`, () => {
  expect(() => isRoTLDDomain()).toThrow();
});

test(`isRoTLDDomain with empty argument`, () => {
  expect(() => isRoTLDDomain(``)).toThrow();
});

test(`isRoTLDDomain with domain that has a romanian tld`, () => {
  expect(isRoTLDDomain(`subdomain.example.ro`)).toBe(true);
});

test(`isRoTLDDomain with domain that doesn't have a romanian tld`, () => {
  expect(isRoTLDDomain(`subdomain.example.com`)).toBe(false);
});
