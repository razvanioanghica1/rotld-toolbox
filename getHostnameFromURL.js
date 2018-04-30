const { URL } = require("url");

const getHostname = url => {
  const parsedURL = new URL(url);

  if (!parsedURL.hostname.length) {
    throw new URIError("Can't decode URL.");
  }

  // Hostnames are always returned in ASCII
  // https://github.com/nodejs/node/issues/18296
  return parsedURL.hostname;
};

module.exports = getHostname;
