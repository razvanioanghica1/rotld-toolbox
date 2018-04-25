const { URL } = require(`url`);

const getDomainNameFromURL = url => {
  const parsedURL = new URL(url);
  const { hostname } = parsedURL;

  if (!hostname.length) {
    throw new URIError(`Can't decode URL.`);
  }

  const parsedURLParts = hostname.split(`.`);
  const parsedURLDomainTld = parsedURLParts[parsedURLParts.length - 1];
  const parsedURLDomainTldContainsNumber = parsedURLDomainTld.match(/\d+/g);

  if (parsedURLDomainTldContainsNumber) {
    throw new Error(`Can't decode URL that contains an IP address.`);
  }

  return hostname;
};

module.exports = getDomainNameFromURL;
