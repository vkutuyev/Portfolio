var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();

// serve static assets normally
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port);
console.log("server started on port " + port);
