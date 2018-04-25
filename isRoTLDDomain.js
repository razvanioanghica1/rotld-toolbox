const isRoTLDDomain = domainName => {
  if (typeof domainName !== `string`) {
    throw new TypeError(`Argument must be a string.`);
  }

  if (!domainName) {
    throw new TypeError(`Can't decode an empty domain name.`);
  }

  const domainNameLabels = domainName.split(`.`);

  if (domainNameLabels.length === 1) {
    throw new TypeError(`Can't decode domain name.`);
  }

  const domainTld = domainNameLabels[domainNameLabels.length - 1];

  if (domainTld !== `ro`) {
    return false;
  }

  return true;
};

module.exports = isRoTLDDomain;
