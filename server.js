var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port);
console.log("Server up on port " + port);
