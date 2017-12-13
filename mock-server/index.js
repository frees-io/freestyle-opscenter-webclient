var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});

app.get('/', function (req, res, next) {
  console.log('get route', req.testing);
  res.end();
});

app.ws('/metrics', function (ws, req) {
  ws.on('message', function (msg) {
    console.log(msg);
  });
  ws.on('close', function () {
    console.log('disconnection');
  });
  console.log('socket', req.testing);
});

setInterval(function () {
  expressWs.getWss('/metrics').clients.forEach(function (client) {
    var blob1 = new Buffer('microservice1 ' + Date.now() + ' cassandra.topics ' + (Math.random() * 100));
    var blob2 = new Buffer('microservice2 ' + Date.now() + ' cassandra.topics ' + (Math.random() * 100));
    var blob3 = new Buffer('microservice3 ' + Date.now() + ' cassandra.topics ' + (Math.random() * 100));
    var blob4 = new Buffer('microservice4 ' + Date.now() + ' cassandra.topics ' + (Math.random() * 100));
    client.send(blob1);
    client.send(blob2);
    client.send(blob3);
    client.send(blob4);
  });
}, 2000);

app.listen(3000);
