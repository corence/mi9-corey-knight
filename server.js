
var http = require('http');
var ShowParser = require('./scripts/model/show-parser.js');

function generate_output(request_json) {
	var request_obj = ShowParser.parse_shows(request_json);
	if(typeof request_obj === "string") return request_obj;
	var response_obj = ShowParser.extract_available_shows(request_obj);
	var response_string = JSON.stringify(response_obj);
	return response_string;
}

var server = http.createServer(function(request, response) {
	var output = generate_output(request.body);
	
	response.writeHead(200);
	response.end(output);
});
server.listen(8080);

