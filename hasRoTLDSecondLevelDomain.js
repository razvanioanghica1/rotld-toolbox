const getRoTLDWhoisDomainLabels = require("./getRoTLDWhoisDomainLabels");

const hasRoTLDSecondLevelDomains = domainName =>
  Boolean(getRoTLDWhoisDomainLabels(domainName).tldSecondLevelDomain);

module.exports = hasRoTLDSecondLevelDomains;
