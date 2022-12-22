const http = require("http");

function rqListener(req, res) {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hi</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</head>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hi</title></head>");
  res.write("<body><h1>Hello form my server</h1></body>");
  res.write("</head>");
  res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);
