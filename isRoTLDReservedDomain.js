const hasRoTLDTopLevelDomain = require("./hasRoTLDTopLevelDomain.js");
const getRoTLDWhoisDomainLabels = require("./getRoTLDWhoisDomainLabels");
const { toUnicode } = require("./convertPunycode");
const RoTLDReservedDomains = require("./RoTLDReservedDomains");

const isRoTLDReservedDomain = domainName => {
  if (!hasRoTLDTopLevelDomain(domainName)) {
    return false;
  }

  const domainNameLabels = getRoTLDWhoisDomainLabels(domainName);

  let domain = `${domainNameLabels.domain}`;

  const domainHasRoTLDSecondLevelDomain = Object.prototype.hasOwnProperty.call(
    domainNameLabels,
    "tldSecondLevelDomain"
  );

  if (domainHasRoTLDSecondLevelDomain) {
    domain += `.${domainNameLabels.tldSecondLevelDomain}`;
  }

  return RoTLDReservedDomains.includes(toUnicode(domain));
};

module.exports = isRoTLDReservedDomain;
