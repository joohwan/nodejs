var exec = require("child_process").exec;
var querystring = require("querystring");

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

exports.start = start;
exports.upload = upload;
