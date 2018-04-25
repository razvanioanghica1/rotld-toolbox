const RoTLDReservedDomains = require(`../RoTLDReservedDomains`);

test(`Reserved domains list is array`, () => {
  expect(Array.isArray(RoTLDReservedDomains)).toBe(true);
});

test(`Reserved domains list is not empty`, () => {
  expect(Boolean(RoTLDReservedDomains.length)).toBe(true);
});
