const getRoTLDDomainLabels = require(`../getRoTLDDomainLabels`);

test(`getRoTLDDomainLabels without argument`, () => {
  expect(() => getRoTLDDomainLabels()).toThrow();
});

test(`getRoTLDDomainLabels with an empty argument`, () => {
  expect(() => getRoTLDDomainLabels(``)).toThrow();
});

test(`getRoTLDDomainLabels with a romanian tld domain`, () => {
  expect(getRoTLDDomainLabels(`example.ro`)).toEqual({
    domain: `example`,
    tld: `ro`
  });
});

test(`getRoTLDDomainLabels with a romanian tld domain containing a RoTLD subdomain`, () => {
  expect(getRoTLDDomainLabels(`example.com.ro`)).toEqual({
    domain: `example`,
    tld: `ro`,
    tldSubdomain: `com`
  });
});

test(`getRoTLDDomainLabels with a non-RoTLD domain`, () => {
  expect(() => getRoTLDDomainLabels(`example.com`)).toThrow();
});
