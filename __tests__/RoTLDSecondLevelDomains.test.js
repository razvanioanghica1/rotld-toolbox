const RoTLDSecondLevelDomains = require("../RoTLDSecondLevelDomains");

test("should be array", () => {
  expect(Array.isArray(RoTLDSecondLevelDomains)).toBe(true);
});

test("shouldn't be empty", () => {
  expect(Boolean(RoTLDSecondLevelDomains.length)).toBe(true);
});
