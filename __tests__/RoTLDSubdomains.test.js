const RoTLDSubdomains = require(`../RoTLDSubdomains`);

test(`should be array`, () => {
  expect(Array.isArray(RoTLDSubdomains)).toBe(true);
});

test(`shouldn't be empty`, () => {
  expect(Boolean(RoTLDSubdomains.length)).toBe(true);
});
