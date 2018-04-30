const getRoTLDDomainLabels = require("./getRoTLDDomainLabels");

const hasRoTLDSecondLevelDomains = domainName =>
  Boolean(getRoTLDDomainLabels(domainName).tldSecondLevelDomain);

module.exports = hasRoTLDSecondLevelDomains;
