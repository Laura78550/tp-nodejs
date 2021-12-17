const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'application/json'});
  var result = [];
  result.push({message: "Hello wolrd", status: res.statusCode});

  res.write(JSON.stringify(result));

  res.end();
});

server.listen(3000,()=>console.log('reponseMessage.js'));
