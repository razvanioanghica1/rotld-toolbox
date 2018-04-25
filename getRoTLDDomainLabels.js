const roTLDSubdomains = require(`./RoTLDSubdomains`);
const isRoTLDDomain = require(`./isRoTLDDomain`);

const getRoTLDDomainNameLabels = domainName => {
  if (!isRoTLDDomain(domainName)) {
    throw new Error(`Can't decode a domain name that doesn't contain a romanian top level domain.`);
  }

  const domainNameLabels = {};
  domainNameLabels.tld = `ro`;

  const domainNameParts = domainName.split(`.`);

  const domainNameDomain = domainNameParts[domainNameParts.length - 2];

  if (roTLDSubdomains.includes(domainNameDomain)) {
    domainNameLabels.tldSubdomain = domainNameDomain;
    domainNameLabels.domain = domainNameParts[domainNameParts.length - 3];
  } else {
    domainNameLabels.domain = domainNameDomain;
  }

  return domainNameLabels;
};

module.exports = getRoTLDDomainNameLabels;
