const hasRoTLDSubdomain = require(`../hasRoTLDSubdomain`);
const RoTLDSubdomains = require(`../RoTLDSubdomains`);

test(`should throw without argument`, () => {
  expect(() => hasRoTLDSubdomain()).toThrow();
});

test(`should throw on empty argument`, () => {
  expect(() => hasRoTLDSubdomain(``)).toThrow();
});

test(`should return true on domain name with RoTLD subdomain`, () => {
  expect(hasRoTLDSubdomain(`subdomain.example.${RoTLDSubdomains[0]}.ro`)).toBe(
    true
  );
});

test(`should return false on domain name without RoTLD subdomain`, () => {
  expect(hasRoTLDSubdomain(`subdomain.example.ro`)).toBe(false);
});
