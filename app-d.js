const http = require('http')  

const server = http.createServer((req, res)=>{  //The Ist parameter means a incoming request from the web page, and the response is what we're sending back.
  console.log(req);
res.write('Welcom to my web page here')
res.end() //It ends a request
})

server.listen(5000)

// web server looks or listens to a request
// request is an object : is when the client is requesting from the web boswer
