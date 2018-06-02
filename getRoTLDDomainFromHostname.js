const getRoTLDWhoisDomainLabels = require("./getRoTLDWhoisDomainLabels");
const hasRoTLDTopLevelDomain = require("./hasRoTLDTopLevelDomain");

const getRoTLDDomainFromHostname = hostname => {
  if (!hasRoTLDTopLevelDomain(hostname)) {
    throw new Error(
      "Can't decode a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const domainNameLabels = getRoTLDWhoisDomainLabels(hostname);
  let domain = `${domainNameLabels.domain}`;

  if (domainNameLabels.tldSecondLevelDomain) {
    domain += `.${domainNameLabels.tldSecondLevelDomain}`;
  }

  domain += ".ro";

  return domain;
};

module.exports = getRoTLDDomainFromHostname;
