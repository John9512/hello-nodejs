const http = require('http');

const port = 3000; 

const server = http.createserver((req, res) =>{
  res.statusCode = 200, 
  res.setHeader('Cintent-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log('server running on port: ${port}');
});
