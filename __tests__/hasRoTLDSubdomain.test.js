const hasRoTLDSubdomain = require(`../hasRoTLDSubdomain`);
const RoTLDSubdomains = require(`../RoTLDSubdomains`);

test(`hasRoTLDSubdomain without argument`, () => {
  expect(() => hasRoTLDSubdomain()).toThrow();
});

test(`hasRoTLDSubdomain with empty argument`, () => {
  expect(() => hasRoTLDSubdomain(``)).toThrow();
});

test(`hasRoTLDSubdomain with domain that contains a RoTLD subdomain`, () => {
  expect(hasRoTLDSubdomain(`subdomain.example.${RoTLDSubdomains[0]}.ro`)).toBe(
    true
  );
});

test(`hasRoTLDSubdomain with domain that doesn't contain a RoTLD subdomain`, () => {
  expect(hasRoTLDSubdomain(`subdomain.example.ro`)).toBe(false);
});
