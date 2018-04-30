const queryRoTLDWhoisServer = require("./queryRoTLDWhoisServer");
const convertWhoisResultToJson = require("./convertWhoisResultToJson");

const getRoTLDDomainWhois = domainName =>
  new Promise((resolve, reject) =>
    queryRoTLDWhoisServer(domainName)
      .then(queryResult => {
        resolve(convertWhoisResultToJson(queryResult));
      })
      .catch(error => reject(error))
  );

module.exports = getRoTLDDomainWhois;
