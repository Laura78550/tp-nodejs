const queryString = require('query-string');
const http = require('http');
const url = require('url');
const parsed = queryString.parse(url);

const values = decodeURI(url)
  .replace('?', '')
  .split('&')
  .map(param => param.split('='))
  .reduce((values, [ key, value ]) => {
    values[ key ] = value
    return values
  }, {})

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'application/json'});
const urlSearchParams = new URLSearchParams(url.stringify);
const params = Object.fromEntries(urlSearchParams.entries());
  var string = queryString.parseUrl(url);
  var result = string.query;
console.log(params);
  //res.write(values);

  res.end();
});

server.listen(3000,()=>console.log('queryString.js'));
