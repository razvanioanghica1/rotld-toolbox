const { URL } = require(`url`);

const getDomainNameFromURL = url => {
  const parsedURL = new URL(url);

  if (!parsedURL.hostname.length) {
    throw new URIError(`Can't decode URL.`);
  }

  return parsedURL.hostname;
};

module.exports = getDomainNameFromURL;
