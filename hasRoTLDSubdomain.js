const getRoTLDDomainLabels = require("./getRoTLDDomainLabels");

const hasRoTLDSubdomain = domainName =>
  Boolean(getRoTLDDomainLabels(domainName).tldSubdomain);

module.exports = hasRoTLDSubdomain;
