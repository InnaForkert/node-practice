const http = require("http");
const fs = require("fs");

function rqListener(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hi</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</head>");
    return res.end();
    0;
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    res.on("data", (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });
    res.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end;
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
