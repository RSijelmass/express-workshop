var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs')

app.use(express.static('public'));
app.use(formidable());	

app.post('/create-post', function(req, res) {
	req.fields["date"] = Date.now();

	fs.readFile(__dirname + '/data/posts.json', function(error, file) {
		var parsedFile = JSON.parse(file);
		parsedFile.push(req.fields)
		fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function(error) {	
			console.log('file is saved!')
		});
	});
});

app.listen(3000, function () {
	console.log('It\'s over 3000?!')
});
