const queryRoTLDWhoisServer = require(`../queryRoTLDWhoisServer`);

test('should reject without argument', () => {
  expect.assertions(1);
  return expect(queryRoTLDWhoisServer()).rejects.toBeInstanceOf(TypeError);
});

test('should reject with empty argument', () => {
  expect.assertions(1);
  return expect(queryRoTLDWhoisServer('')).rejects.toBeInstanceOf(TypeError);
});

test('should reject on domain name without romanian tld', () => {
  expect.assertions(1);
  return expect(queryRoTLDWhoisServer('example.com')).rejects.toBeInstanceOf(Error);
});

test('should resolve with whois data on domain name with romanian tld', () => {
  return expect(queryRoTLDWhoisServer('rotld.ro')).resolves.toMatch(/Whois Server Version 3.0/);
});

test.skip('should reject on connection error', () => {
  expect.assertions(1);
  return expect(queryRoTLDWhoisServer('rotld.ro')).rejects.toBeInstanceOf(Error);
});

