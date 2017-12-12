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
    var blob = new Buffer('microservice1 ' + Date.now() + ' cassandra.topics ' + (Math.random() * 100));
    client.send(blob);
  });
}, 2000);

app.listen(3000);
