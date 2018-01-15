var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
// Proto file JS definition
var Metric = require('../src/app/shared/proto/metrics_pb').Metric;


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
    var metric1 = new Metric(['metric', 'microservice1', 'node', (Math.random() * 100), Date.now()]).serializeBinary();
    var metric2 = new Metric(['metric', 'microservice2', 'node', (Math.random() * 100), Date.now()]).serializeBinary();
    var metric3 = new Metric(['metric', 'microservice3', 'node', (Math.random() * 100), Date.now()]).serializeBinary();
    var metric4 = new Metric(['metric', 'microservice4', 'node', (Math.random() * 100), Date.now()]).serializeBinary();
    client.send(metric1);
    client.send(metric2);
    client.send(metric3);
    client.send(metric4);
  });
}, 2000);

app.listen(3000);
