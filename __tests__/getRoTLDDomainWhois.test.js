const getRoTLDDomainWhois = require("../getRoTLDDomainWhois");
jest.mock("../queryRoTLDWhoisServer");

test("should reject without argument", () => {
  expect.assertions(1);
  return expect(getRoTLDDomainWhois()).rejects.toBeInstanceOf(TypeError);
});

test("should reject with empty argument", () => {
  expect.assertions(1);
  return expect(getRoTLDDomainWhois("")).rejects.toBeInstanceOf(TypeError);
});

test("should reject on domain name without Romanian tld", () => {
  expect.assertions(1);
  return expect(getRoTLDDomainWhois("ș.com")).rejects.toBeInstanceOf(Error);
});

test("should resolve with empty object on domain name not found", () => {
  return expect(getRoTLDDomainWhois("notfound.ro")).resolves.toEqual({});
});

test("should resolve with whois data on domain name with Romanian tld", () => {
  return expect(getRoTLDDomainWhois("ș.ro")).resolves.toEqual({
    domainName: "xn--yla.ro",
    registeredOn: "Before 2001",
    expiresOn: "2018-03-14",
    registrar: "ICI - Registrar",
    referralUrl: "http://www.rotld.ro",
    dnssec: "Active",
    dsRecord: [
      {
        dsKeytag: "22215",
        dsAlgorithm: "7-RSASHA1-NSEC3-SHA1",
        dsDigestType: "1-SHA1",
        dsDigest: "a3df7873ef974bddc91efd6f58d4f9b1487d16bd"
      },
      {
        dsRecordName: "22215",
        dsAlgorithm: "7-RSASHA1-NSEC3-SHA1",
        dsDigestType: "2-SHA256",
        dsDigest:
          "3c5f4a7688244eb968b987444fca2ef3c24c2ce7ae106454e6c097a3769f7be2"
      },
      {
        dsRecordName: "61217",
        dsAlgorithm: "7-RSASHA1-NSEC3-SHA1",
        dsDigestType: "1-SHA1",
        dsDigest: "0673766c8899864e4c1181906b059c48b1fa450d"
      },
      {
        dsRecordName: "61217",
        dsAlgorithm: "7-RSASHA1-NSEC3-SHA1",
        dsDigestType: "2-SHA256",
        dsDigest:
          "29feb74a3a7bf0b95c7aace5aef18c1fbf749c02fd493340ed8e19974cc324f7"
      }
    ],
    nameserver: [
      "ns1.xn--yla.ro",
      "ns2.xn--yla.ro",
      "ns3.xn--yla.ro",
      "ns4.xn--yla.ro"
    ],
    domainStatus: [
      "DeleteProhibited",
      "RegistrantTransferProhibited",
      "TransferProhibited",
      "UpdateProhibited"
    ]
  });
});

test("should resolve with whois data on domain name with Romanian tld without nameservers, dnsec, domainstatus, referral url", () => {
  return expect(
    getRoTLDDomainWhois("nonameserversnodnsecokdomainstatusnoreferralurl.ro")
  ).resolves.toEqual({
    domainName: "nonameserversnodnsecokdomainstatusnoreferralurl.ro",
    registeredOn: "Before 2001",
    expiresOn: "2018-03-14",
    registrar: "ICI - Registrar",
    domainStatus: ["OK"],
    dnssec: "Inactive"
  });
});
