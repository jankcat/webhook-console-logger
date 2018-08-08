// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/webhook', function(request, response) {
  console.log(JSON.stringify(request.body));
  response.status(200).json({status:'success'});
});

app.post('/webhook', function(request, response) {
  console.log(JSON.stringify(request.body));
  response.status(200).json({status:'success'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
