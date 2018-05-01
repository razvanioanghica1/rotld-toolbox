const getRoTLDWhoisDomainLabels = require("./getRoTLDWhoisDomainLabels");
const isRoTLDDomain = require("./isRoTLDDomain");

const getRoTLDDomainFromHostname = hostname => {
  if (!isRoTLDDomain(hostname)) {
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
