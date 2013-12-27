var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start(response) {
	console.log("request handler for start called");
		
	var body = '<html>'+ 
		'<head>'+ 
		'<meta http-equiv="Content-Type" content="text/html; '+ 
		'charset=UTF-8" />'+ 
		'</head>'+ 
		'<body>'+ 
		'<form action="/upload" method="post">'+ 
		'<textarea name="text" rows="20" cols="60"></textarea>'+ 
		'<input type="submit" value="Submit text" />'+ 
		'</form>'+ 
		'</body>'+ 
		'</html>';
		
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(body);
		response.end();
}

function upload(response, postData) {
	console.log("request handler for upload called");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("You've sent:"+
		querystring.parse(postData).text);
	response.end();
}

function sleep(milliseconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < (startTime + milliseconds));
}

function show(response, postData) {
	console.log("Request handler for 'show' was called.");
	fs.readFile("/Users/joohwanoh/scan/sears.natuzzi.sofa.contact.jpg",
		"binary", 
		function(error, file) {
			if (error) {
				response.writeHead(500, {"Content-Type":"text/html"});
				response.write(error + "\n");
				response.end();
			} else {
				response.writeHead(200, {"Content-Type":"image/jpeg"});
				response.write(file, "binary");
				response.end();
			}
		});
}

exports.start = start;
exports.upload = upload;
exports.show = show;
