var express = require('express');
var cors = require('cors');
var app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.static(__dirname + '/'));
app.listen(8080);

console.log('Listening on http://localhost:8080');
