const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short History")
  }
  res.end(`
 <h1>Oops!</h1>
 <p>We can't see to find the page you're looking for.</p>
 <a href="/">back Home</a>
  `);
});

server.listen(5000); //means what port our server will be listening too.,