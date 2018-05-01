# rotld-toolbox &middot; [![Build Status](https://travis-ci.org/alinchican/rotld-toolbox.svg?branch=master)](https://travis-ci.org/alinchican/rotld-toolbox) [![codecov](https://codecov.io/gh/alinchican/rotld-toolbox/branch/master/graph/badge.svg)](https://codecov.io/gh/alinchican/rotld-toolbox) [![Greenkeeper badge](https://badges.greenkeeper.io/alinchican/rotld-toolbox.svg)](https://greenkeeper.io/)

Simple tools for working with RoTLD (Romania Top Level Domain).

rotld-toolbox is available as the `rotld-toolbox` package on [npm](https://www.npmjs.com/). You can find it [here](https://www.npmjs.com/package/rotld-toolbox).

## How to use

Until in-depth documentation is available, take a look at the examples below.

### Check if a domain name has a Romanian TLD

```js
const isRoTLDDomain = require("rotld-toolbox/isRoTLDDomain");

console.log(isRoTLDDomain("ș.ro"));
// -> true
```

### Check if a Romanian domain name has a RoTLD second level domain

```js
const hasRoTLDSecondLevelDomain = require("rotld-toolbox/hasRoTLDSecondLevelDomain");

console.log(hasRoTLDSecondLevelDomain("ș.ro"));
// -> false
```

### Check if a Romanian domain name is reserved

```js
const isRoTLDReservedDomain = require("rotld-toolbox/isRoTLDReservedDomain");

console.log(isRoTLDReservedDomain("băicoi.ro"));
// -> true
```

### Get WHOIS result for a Romanian domain name

```js
const queryRoTLDWhoisServer = require("rotld-toolbox/queryRoTLDWhoisServer");

console.log(queryRoTLDWhoisServer("ș.ro").then(whoisResult => console.log(whoisResult)));
// -> '\n% Whois Server Version 3.0 ...Domain Status: UpdateProhibited\r\n\r\n\r\n'
```

### Get WHOIS result in JSON format for a Romanian domain name

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

getRoTLDDomainWhois("nons-nodnsec-norefferalurl-domainok.ro").then(whoisResult => console.log(whoisResult));
/*
  ->
    {
      domainName: "xn--yla.ro",
      registeredOn: "Before 2001",
      expiresOn: "2018-03-14", // in loving memory of Stephen Hawking
      registrar: "ICI - Registrar",
      domainStatus: ["OK"],
      dnssec: "Inactive",
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

### Get RoTLD domain fron hostname

```js
const getRoTLDDomainFromHostname = require("rotld-toolbox/getRoTLDDomainFromHostname");

console.log(getRoTLDDomainFromHostname("subdomeniu.ș.ro"));
// -> xn--yla.ro

console.log(getRoTLDDomainFromHostname("subdomeniu.ș.www.ro"));
// -> xn--yla.www.ro
```

### Get hostname from an URL

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

### Convert WHOIS result to JSON

```js
const convertWhoisResultToJson = require("rotld-toolbox/convertWhoisResultToJson");

console.log(convertWhoisResultToJson(whoisResultString));
// -> same output as getRoTLDDomainWhois
```

### Clean WHOIS result

```js
const cleanWhoisResult = require("rotld-toolbox/cleanWhoisResult");

console.log(cleanWhoisResult(whoisResultString));
/*
  ->
    [
      "Domain Name: xn--yla.ro",
      ...
      "Referral URL: http://www.rotld.ro",
      ...
      "DS Keytag #1: 22215",
      "DS Algorithm #1: 7-RSASHA1-NSEC3-SHA1",
      "DS Digest Type #1: 1-SHA1",
      "DS Digest #1: a3df7873ef974bddc91efd6f58d4f9b1487d16bd",
      "DS Keytag #2: 22215",
      ...
      "Nameserver: ns1.xn--yla.ro",
      "Nameserver: ns2.xn--yla.ro",
      "Domain Status: DeleteProhibited",
      "Domain Status: RegistrantTransferProhibited"
    ]
*/
```

## Extras

### RoTLDReservedDomains
The list is taken weekly from [RoTLD - Reserved Domains](http://www.rotld.ro/static/media/uploads/domenii_rezervate.pdf).

```js
const RoTLDReservedDomains = require("rotld-toolbox/RoTLDReservedDomains");

console.log(RoTLDReservedDomains);
// -> ['23-august', 'abrămuț', ...'zvoriștea.ro']
```

### RoTLDSecondLevelDomains
The list is taken weekly from [RoTLD - Rules for Registration](http://www.rotld.ro/reguli-de-inregistrare/).

```js
const RoTLDSecondLevelDomains = require("rotld-toolbox/RoTLDSecondLevelDomains");

console.log(RoTLDSecondLevelDomains);
// -> ['com', 'org', ...'www']
```
