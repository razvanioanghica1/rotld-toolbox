const cleanWhoisResult = require("./cleanWhoisResult");
const camelCase = require("camelcase");

const convertWhoisResultToJson = queryResult => {
  const cleanedQueryResult = cleanWhoisResult(queryResult);

  if (!cleanedQueryResult.length) {
    return {};
  }

  const processedWhoisData = {};

  cleanedQueryResult.forEach(whoisLine => {
    // Split whois result line into substrings
    const whoisFieldSubstrings = whoisLine.split(":");

    // Set field key to first substring and camelCase
    const whoisFieldKey = camelCase(whoisFieldSubstrings[0]);

    // Set field value as the rest of the substrings
    const whoisFieldValue = whoisFieldSubstrings
      .slice(1)
      // Join substrings, we don't want to break URLs
      .join(":")
      // Remove whitespace
      .trim();

    // Check if the field key is a nameserver or a domain status
    if (
      whoisFieldKey.startsWith("nameserver") ||
      whoisFieldKey.startsWith("domainStatus")
    ) {
      // Check if there's already a field key array
      if (Array.isArray(processedWhoisData[whoisFieldKey])) {
        // Just push the field value real good ;)
        processedWhoisData[whoisFieldKey].push(whoisFieldValue);
      } else {
        // Set field key as an array containing field value
        processedWhoisData[whoisFieldKey] = [whoisFieldValue];
      }

      // Continue to next whoisLine
      return;
    }

    // Check if the field key belongs to a DS record
    if (whoisFieldKey.startsWith("ds")) {
      // Split DS record into substrings
      const dsRecordSubstrings = whoisFieldKey.split(" #");
      // Set field key as the first substring
      let [dsRecordName, dsRecordNumber] = dsRecordSubstrings;

      // Check if there's a ds record array
      if (Array.isArray(processedWhoisData.dsRecord)) {
        // Check if there's an object belonging to the current ds record number
        if (
          typeof processedWhoisData.dsRecord[dsRecordNumber - 1] === "object"
        ) {
          // Set ds record name and value
          processedWhoisData.dsRecord[dsRecordNumber - 1][
            dsRecordName
          ] = whoisFieldValue;
        } else {
          // Set ds record as an object containing record name and value
          processedWhoisData.dsRecord[dsRecordNumber - 1] = {
            dsRecordName: whoisFieldValue
          };
        }
      } else {
        // Set ds record as an object array containing record name and value
        processedWhoisData.dsRecord = [{ [dsRecordName]: whoisFieldValue }];
      }

      // Continue to next whoisLine
      return;
    }

    // Set field key and field value on non-empty field value
    if (whoisFieldValue.length) {
      processedWhoisData[whoisFieldKey] = whoisFieldValue;
    }
  });

  return processedWhoisData;
};

module.exports = convertWhoisResultToJson;
