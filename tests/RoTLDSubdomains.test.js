const RoTLDSubdomains = require(`../RoTLDSubdomains`);

test(`Reserved domains list is array`, () => {
  expect(Array.isArray(RoTLDSubdomains)).toBe(true);
});

test(`Reserved domains list is not empty`, () => {
  expect(Boolean(RoTLDSubdomains.length)).toBe(true);
});
