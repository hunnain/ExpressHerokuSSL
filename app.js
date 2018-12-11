var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();

// enable ssl redirect
app.use(sslRedirect());

app.get('/', function(req, res){
  res.send('hello world');
  console.log("Runnning on 30002")
});

console.log("Runnning on 30002")
app.listen(3002);
