const isRoTLDDomain = require("./isRoTLDDomain");
const net = require("net");
const { toASCII } = require("./convertPunycode");

const queryRoTLDWhoisServer = domainName =>
  new Promise((resolve, reject) => {
    let whoisResult = "";

    if (!isRoTLDDomain(domainName)) {
      reject(
        new Error(
          "Can't query a domain name that doesn't contain a Romanian top level domain."
        )
      );
    }

    const connection = net.connect(43, "whois.rotld.ro", () => {
      connection.write(`${toASCII(domainName)}\r\n`);
    });

    connection.on("data", data => {
      whoisResult += data.toString();
    });

    connection.on("close", () => {
      resolve(whoisResult);
    });

    connection.on("error", connectionError => {
      reject(connectionError);
    });
  });

module.exports = queryRoTLDWhoisServer;
