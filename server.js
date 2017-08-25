// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var os = require('os');
var headerParser = require('./headerParser.js')

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.send(headerParser(request.connection.remoteAddress, request.headers["accept-language"], request.headers["user-agent"]));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
