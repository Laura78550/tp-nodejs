const http = require('http');

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.writeHead(200, {'Content-Type': 'application/json'});
  var result = [];
  result.push({firstname: "Laura", lastname: "Pineau", birthday: "14/03/1998", color: "Toutes"});

  res.write(JSON.stringify(result));

  res.end();
});

server.listen(3000,()=>console.log('reponseIdentity.js'));
