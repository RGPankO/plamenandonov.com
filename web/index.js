var express = require('express')
var app = express()

var path = require('path');

// viewed at http://localhost:8080

app.use(express.static('public'))


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function(){
    console.log('App is listening on port: 80')
})