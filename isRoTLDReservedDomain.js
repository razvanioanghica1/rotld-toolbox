const isRoTLDDomain = require("./isRoTLDDomain.js");
const getRoTLDDomainLabels = require("./getRoTLDDomainLabels");
const { toUnicode } = require("./convertPunycode");
const RoTLDReservedDomains = require("./RoTLDReservedDomains");

const isRoTLDReservedDomain = domainName => {
  if (!isRoTLDDomain(domainName)) {
    return false;
  }

  const domainNameLabels = getRoTLDDomainLabels(domainName);

  let domain = `${domainNameLabels.domain}`;

  const domainHasRoTLDSubdomain = Object.prototype.hasOwnProperty.call(
    domainNameLabels,
    "tldSubdomain"
  );

  if (domainHasRoTLDSubdomain) {
    domain += `.${domainNameLabels.tldSubdomain}`;
  }

  return RoTLDReservedDomains.includes(toUnicode(domain));
};

module.exports = isRoTLDReservedDomain;
