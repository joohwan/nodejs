var exec = require("child_process").exec;

function start(response) {
	console.log("request handler for start called");
		
	exec("find /", 
		{timeout: 10000, maxBuffer: 20000*1024},
		function(error, stdout, stderr) {
			response.writeHead(200, {"Content-Type":"text/plain"});
			response.write(stdout);
			response.end();
		});	
}

function upload(response) {
	console.log("request handler for upload called");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello upload");
	response.end();
}

function sleep(milliseconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < (startTime + milliseconds));
}

exports.start = start;
exports.upload = upload;
