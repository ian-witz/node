var express = require('express');
var port = 3000;

var app = express();
app.use(express.static('resources'));

/* and add the rest of the stuff! */

app.listen(port, function(){
	console.log('Listening on port ' + port);
});