const http = require("http");

const runServer = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to my page')
  }
  if(req.ulr === '/about'){
    res.end('Our about page')
  }
  res.end(`<h1>Oops there's a problem</h1>
    <p>Try click the link below</p>
    <a href="/">back home</a>`) //default respond
});

runServer.listen(5200);
