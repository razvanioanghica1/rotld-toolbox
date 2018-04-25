const isRoTLDReservedDomain = require(`../isRoTLDReservedDomain`);
const RoTLDReservedDomains = require(`../RoTLDReservedDomains`);

test(`isRoTLDReservedDomain without argument`, () => {
  expect(() => isRoTLDReservedDomain()).toThrow();
});

test(`isRoTLDReservedDomain with empty argument`, () => {
  expect(() => isRoTLDReservedDomain(``)).toThrow();
});

test(`isRoTLDReservedDomain with domain that is a RoTLD reserved domain`, () => {
  expect(isRoTLDReservedDomain(`${RoTLDReservedDomains[1]}.ro`)).toBe(true);
});

test(`isRoTLDReservedDomain with domain that isn't a RoTLD reserved domain`, () => {
  expect(isRoTLDReservedDomain(`example.ro`)).toBe(false);
});
