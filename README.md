# rotld-toolbox &middot; [![Build Status](https://travis-ci.org/alinchican/rotld-toolbox.svg?branch=master)](https://travis-ci.org/alinchican/rotld-toolbox) [![codecov](https://codecov.io/gh/alinchican/rotld-toolbox/branch/master/graph/badge.svg)](https://codecov.io/gh/alinchican/rotld-toolbox) [![Greenkeeper badge](https://badges.greenkeeper.io/alinchican/rotld-toolbox.svg)](https://greenkeeper.io/)

Simple tools for working with RoTLD (Romania Top Level Domain).

# Work in progress, preview only! Do not use!

rotld-toolbox is available as the `rotld-toolbox` package on [npm](https://www.npmjs.com/). You can find it [here](https://www.npmjs.com/package/rotld-toolbox).

## Usage

Until in-depth documentation is available, take a look at the examples below to understand how these tools might be used.

### Check if a domain name has a Romanian TLD

```js
const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");

console.log(isRoTLDDomain("ș.ro"));
// -> true
console.log(isRoTLDDomain("ș.com"));
// -> false
```

### Check if a Romanian domain name has a RoTLD second level domain

```js
const hasRoTLDSecondLevelDomains = require("rotld-toolbox/hasRoTLDSecondLevelDomains");

console.log(hasRoTLDSecondLevelDomains("ș.ro"));
// -> false
console.log(hasRoTLDSecondLevelDomains("ș.www.ro"));
// -> true
```

### Check if a Romanian domain name is reserved

```js
const isRoTLDReservedDomain = require("rotld-toolbox/isRoTLDReservedDomain");

console.log(isRoTLDReservedDomain("ș.ro"));
// -> false
console.log(isRoTLDReservedDomain("băicoi.ro"));
// -> true
```

### Get WHOIS result for a Romanian domain

```js
const queryRoTLDWhoisServer = require("rotld-toolbox/queryRoTLDWhoisServer");

console.log(queryRoTLDWhoisServer("ș.ro").then(whoisResult => console.log(whoisResult)));
// -> '\n% Whois Server Version 3.0 ...Domain Status: UpdateProhibited\r\n\r\n\r\n'
```

### Get WHOIS result in JSON format for a Romanian domain

```js
const getRoTLDDomainWhois = require("rotld-toolbox/getRoTLDDomainWhois");

getRoTLDDomainWhois("ș.ro").then(whoisResult => console.log(whoisResult));
/*
  ->
    {
      domainName: "xn--yla.ro",
      registeredOn: "Before 2001",
      expiresOn: "2018-03-14", // in loving memory of Stephen Hawking
      referralUrl: "http://www.rotld.ro",
      registrar: "ICI - Registrar",
      domainStatus: [
        "DeleteProhibited",
        "RegistrantTransferProhibited",
        ...
      ],
      nameserver: [
        "ns1.xn--yla.ro",
        "ns2.xn--yla.ro",
        ...
      ]
      dnssec: "Active",
      dsRecord: [
        {
          dsAlgorithm: "...",
          dsDigest: "...",
          dsDigestType: "...",
          dsKeytag: "..."
        },
        ...
      ]
    }
*/
```

### Get WHOIS domain labels for a Romanian domain name

```js
const getRoTLDWhoisDomainLabels = require("rotld-toolbox/getRoTLDWhoisDomainLabels");

console.log(getRoTLDWhoisDomainLabels("ș.ro"));
/*
  ->
    {
      domain: "xn--yla",
      tld: "ro"
    }
*/

console.log(getRoTLDWhoisDomainLabels("www.șubdomeniu.ș.ro"));
/*
  ->
    {
      subdomain: "subdomeniu",
      domain: "xn--yla",
      tld: "ro"
    }
*/

console.log(getRoTLDWhoisDomainLabels("subdomeniu.ș.www.ro"));
/*
  ->
    {
      subdomain: "subdomeniu",
      domain: "xn--yla",
      tldSecondLevelDomain: "www",
      tld: "ro",
    }
*/
```

### Get domain name from an URL

```js
const getHostnameFromURL = require("rotld-toolbox/getHostnameFromURL");

console.log(getHostnameFromURL("http://subdomeniu.subdomeniu.ș.com"));
// -> subdomeniu.subdomeniu.xn--yla.com
```

### Convert punycode

```js
const convertPunycode = require("rotld-toolbox/convertPunycode");

console.log(convertPunycode.toUnicode("xn--yla.ro"));
// -> ș.ro
console.log(convertPunycode.toASCII("ș.ro"));
// -> xn--yla.ro
```

## Extras

### RoTLDReservedDomains
An array containing a list of RoTLD reserved domains. The list is taken weekly from [RoTLD - Reserved Domains](http://www.rotld.ro/static/media/uploads/domenii_rezervate.pdf).

```js
const RoTLDReservedDomains = require("rotld-toolbox/RoTLDReservedDomains");

console.log(RoTLDReservedDomains);
// -> ['23-august', 'abrămuț', ...'zvoriștea.ro']
```

### RoTLDSecondLevelDomains
An array containing a list of RoTLD second level domains. The list is taken weekly from [RoTLD - Rules for Registration](http://www.rotld.ro/reguli-de-inregistrare/).

```js
const RoTLDSecondLevelDomains = require("rotld-toolbox/RoTLDSecondLevelDomains");

console.log(RoTLDSecondLevelDomains);
// -> ['com', 'org', ...'www']
```
