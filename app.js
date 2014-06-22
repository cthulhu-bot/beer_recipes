var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/src'));
var port = Number(process.env.PORT || 5000);
app.listen(port, function() { 
    console.log('Web server started');
});
