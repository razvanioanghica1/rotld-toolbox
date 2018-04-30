const isRoTLDDomain = require("../isRoTLDDomain");
const getRoTLDWhoisDomainLabels = require("../getRoTLDWhoisDomainLabels");

const queryRoTLDWhoisServer = domainName =>
  new Promise((resolve, reject) => {
    if (!isRoTLDDomain(domainName)) {
      reject(
        new Error(
          "Can't query a domain name that doesn't contain a Romanian top level domain."
        )
      );
    }

    if (getRoTLDWhoisDomainLabels(domainName).subdomain) {
      reject(new Error("Can't query a domain name that contains a subdomain."));
    }

    resolve(
      "\n% Whois Server Version 3.0 - whois.rotld.ro:43\n\n% Rights restricted by copyright.\n% Specifically, this data MAY ONLY be used for Internet operational\n% purposes. It may not be used for targeted advertising or any\n% other purpose.\n\n% Este INTERZISA folosirea datelor de pe acest server in oricare\n% alt scop decat operarea retelei. In special este INTERZISA\n% folosirea lor in scopuri publicitare.\n\n% Top Level Domain : ro\n% Maintainance : www.rotld.ro\n\n  Domain Name: xn--yla.ro\r\n  Registered On: Before 2001\r\n  Expires On: 2018-03-14\r\n  Registrar: ICI - Registrar\r\n  Referral URL: http://www.rotld.ro\r\n\r\n  DNSSEC: Active\r\n  DS Keytag #1: 22215\r\n  DS Algorithm #1: 7-RSASHA1-NSEC3-SHA1\r\n  DS Digest Type #1: 1-SHA1\r\n  DS Digest #1: a3df7873ef974bddc91efd6f58d4f9b1487d16bd\r\n  DS Keytag #2: 22215\r\n  DS Algorithm #2: 7-RSASHA1-NSEC3-SHA1\r\n  DS Digest Type #2: 2-SHA256\r\n  DS Digest #2: 3c5f4a7688244eb968b987444fca2ef3c24c2ce7ae106454e6c097a3769f7be2\r\n  DS Keytag #3: 61217\r\n  DS Algorithm #3: 7-RSASHA1-NSEC3-SHA1\r\n  DS Digest Type #3: 1-SHA1\r\n  DS Digest #3: 0673766c8899864e4c1181906b059c48b1fa450d\r\n  DS Keytag #4: 61217\r\n  DS Algorithm #4: 7-RSASHA1-NSEC3-SHA1\r\n  DS Digest Type #4: 2-SHA256\r\n  DS Digest #4: 29feb74a3a7bf0b95c7aace5aef18c1fbf749c02fd493340ed8e19974cc324f7\r\n\r\n  Nameserver: ns1.xn--yla.ro\r\n  Nameserver: ns2.xn--yla.ro\r\n\r\n  Nameserver: ns3.xn--yla.ro\r\n\r\n  Nameserver: ns4.xn--yla.ro\r\n\r\n  Domain Status: DeleteProhibited\r\n  Domain Status: RegistrantTransferProhibited\r\n  Domain Status: TransferProhibited\r\n  Domain Status: UpdateProhibited\r\n\r\n\r\n"
    );
  });

module.exports = queryRoTLDWhoisServer;
