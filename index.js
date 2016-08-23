var express = require('express');
var proxy = require('express-http-proxy');
var app = express();

app.use('/api/football_data', proxy('api.football-data.org'));
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
