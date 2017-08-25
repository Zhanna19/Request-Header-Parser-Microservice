var data = {"ipaddress" : "", "language" : "", "software" : ""};
var headerParser = function(ip, language, software) {
  data.ipaddress = ip.split(':').reverse()[0].trim();
  data.language = language.split(',')[0].trim();
  data.software = software.split(/[\(\)]/)[1].trim();
  return data
}

module.exports = headerParser;