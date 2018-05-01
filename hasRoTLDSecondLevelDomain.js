const getRoTLDWhoisDomainLabels = require("./getRoTLDWhoisDomainLabels");

const hasRoTLDSecondLevelDomain = domainName =>
  Boolean(getRoTLDWhoisDomainLabels(domainName).tldSecondLevelDomain);

module.exports = hasRoTLDSecondLevelDomain;
