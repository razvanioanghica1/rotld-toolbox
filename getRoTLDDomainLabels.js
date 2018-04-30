const RoTLDSecondLevelDomains = require("./RoTLDSecondLevelDomains");
const isRoTLDDomain = require("./isRoTLDDomain");
const { toASCII } = require("./convertPunycode");

const getRoTLDDomainNameLabels = domainName => {
  if (!isRoTLDDomain(domainName)) {
    throw new Error(
      "Can't decode a domain name that doesn't contain a Romanian top level domain."
    );
  }

  const domainNameLabels = {};
  const domainNameParts = domainName.split(".");
  domainNameLabels.tld = "ro";
  const domainNameDomain = domainNameParts[domainNameParts.length - 2];

  if (RoTLDSecondLevelDomains.includes(domainNameDomain)) {
    domainNameLabels.tldSecondLevelDomain = domainNameDomain;
    domainNameLabels.domain = domainNameParts[domainNameParts.length - 3];
  } else {
    domainNameLabels.domain = domainNameDomain;
  }

  domainNameLabels.domain = toASCII(domainNameLabels.domain);
  return domainNameLabels;
};

module.exports = getRoTLDDomainNameLabels;
