const RoTLDSecondLevelDomains = require("./RoTLDSecondLevelDomains");
const isRoTLDDomain = require("./isRoTLDDomain");
const { toASCII } = require("./convertPunycode");

const getRoTLDWhoisDomainLabels = domainName => {
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't decode a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const domainNameLabels = {};
  const domainNameParts = toASCII(domainName).split(".");
  domainNameLabels.tld = "ro";
  const domainNameDomain = domainNameParts[domainNameParts.length - 2];

  if (RoTLDSecondLevelDomains.includes(domainNameDomain)) {
    domainNameLabels.tldSecondLevelDomain = domainNameDomain;
    domainNameLabels.domain = domainNameParts[domainNameParts.length - 3];

    if (domainNameParts[domainNameParts.length - 4]) {
      domainNameLabels.subdomain = domainNameParts[domainNameParts.length - 4];
    }
  } else {
    domainNameLabels.domain = domainNameDomain;

    if (domainNameParts[domainNameParts.length - 3]) {
      domainNameLabels.subdomain = domainNameParts[domainNameParts.length - 3];
    }
  }

  return domainNameLabels;
};

module.exports = getRoTLDWhoisDomainLabels;
