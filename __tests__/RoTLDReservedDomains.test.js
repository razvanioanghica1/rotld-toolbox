const RoTLDReservedDomains = require("../RoTLDReservedDomains");

test("should be array", () => {
  expect(Array.isArray(RoTLDReservedDomains)).toBe(true);
});

test("shouldn't be empty", () => {
  expect(Boolean(RoTLDReservedDomains.length)).toBe(true);
});
