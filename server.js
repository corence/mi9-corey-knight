
var http = require('http');
var ShowParser = require('./scripts/model/show-parser.js');

function generate_output(request_json) {
	try {
		var shows = ShowParser.parse_shows(request_json);
		var available = ShowParser.extract_available_shows(shows);
		var response_string = JSON.stringify(available);
		return {"status_code": 200, "body": response_string};
	} catch(err) {
		var message = {"error": "Could not decode request: " + err.message};
		message = JSON.stringify(message);
		return {"status_code": 400, "body": message};
	}
}

var server = http.createServer(function(request, response) {
	var output = generate_output(request.body);
	
	response.writeHead(output.status_code);
	response.end(output.body);
});
server.listen(8080);

