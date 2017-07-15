var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

global.credentials = {};

app.get('/credentials', function (req, res) {
  Object.assign(global.credentials, req.query);
  res.send(global.credentials);
});

app.delete('/credentials', function (req, res) {
  for (let variable of req.query.list.split(',')) {
    delete global.credentials[variable];
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
