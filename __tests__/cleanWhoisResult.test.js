const cleanWhoisResult = require("../cleanWhoisResult");
const queryRoTLDWhoisServer = require("../queryRoTLDWhoisServer");
jest.mock("../queryRoTLDWhoisServer");

test("should throw without argument", () => {
  return expect(() => cleanWhoisResult()).toThrow();
});

test("should throw with empty argument", () => {
  return expect(() => cleanWhoisResult("")).toThrow();
});

test("should return an empty array if domain doesn't exist", () => {
  expect.assertions(1);

  return queryRoTLDWhoisServer("notfound.ro").then(whoisResult =>
    expect(cleanWhoisResult(whoisResult)).toEqual([])
  );
});

test("should return array containing cleaned WHOIS result lines", () => {
  expect.assertions(1);

  return queryRoTLDWhoisServer("ș.ro").then(whoisResult =>
    expect(cleanWhoisResult(whoisResult)).toEqual([
      "Domain Name: xn--yla.ro",
      "Registered On: Before 2001",
      "Expires On: 2018-03-14",
      "Registrar: ICI - Registrar",
      "Referral URL: http://www.rotld.ro",
      "DNSSEC: Active",
      "DS Keytag #1: 22215",
      "DS Algorithm #1: 7-RSASHA1-NSEC3-SHA1",
      "DS Digest Type #1: 1-SHA1",
      "DS Digest #1: a3df7873ef974bddc91efd6f58d4f9b1487d16bd",
      "DS Keytag #2: 22215",
      "DS Algorithm #2: 7-RSASHA1-NSEC3-SHA1",
      "DS Digest Type #2: 2-SHA256",
      "DS Digest #2: 3c5f4a7688244eb968b987444fca2ef3c24c2ce7ae106454e6c097a3769f7be2",
      "DS Keytag #3: 61217",
      "DS Algorithm #3: 7-RSASHA1-NSEC3-SHA1",
      "DS Digest Type #3: 1-SHA1",
      "DS Digest #3: 0673766c8899864e4c1181906b059c48b1fa450d",
      "DS Keytag #4: 61217",
      "DS Algorithm #4: 7-RSASHA1-NSEC3-SHA1",
      "DS Digest Type #4: 2-SHA256",
      "DS Digest #4: 29feb74a3a7bf0b95c7aace5aef18c1fbf749c02fd493340ed8e19974cc324f7",
      "Nameserver: ns1.xn--yla.ro",
      "Nameserver: ns2.xn--yla.ro",
      "Nameserver: ns3.xn--yla.ro",
      "Nameserver: ns4.xn--yla.ro",
      "Domain Status: DeleteProhibited",
      "Domain Status: RegistrantTransferProhibited",
      "Domain Status: TransferProhibited",
      "Domain Status: UpdateProhibited"
    ])
  );
});
