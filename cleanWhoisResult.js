const cleanWhoisResult = whoisResult => {
  if (typeof whoisResult !== "string") {
    throw new TypeError("Argument must be a string.");
  }

  if (!whoisResult) {
    throw new TypeError("Can't clean an empty WHOIS result.");
  }

  if (whoisResult.includes("No entries found for the selected source(s)")) {
    return [];
  }

  return (
    whoisResult
      // Split whois data into lines
      .split("\n")
      // Remove whitespace
      .map(whoisResultLine => whoisResultLine.trim())
      // Remove empty lines and whois comments
      .filter(
        whoisResultLine =>
          whoisResultLine.length > 0 && whoisResultLine.charAt(0) !== "%"
      )
  );
};

module.exports = cleanWhoisResult;
