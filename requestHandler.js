var exec = require("child_process").exec;


function start(response){
  console.log("Requset handler 'start' was called.");

  exec("ls -lah",function(error,stdout,stderr){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write(stdout);
    response.end();
  })
}

function upload(response){
  console.log("Requset handler 'upload' was called.");

  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("hello update");
  response.end();
}

exports.start = start;
exports.upload = upload;
