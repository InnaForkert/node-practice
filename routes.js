const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hi</title></head>");
    res.write(
      "<body><h1>Hello user!</h1><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
    });
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Hi</title></head>");
    res.write(
      "<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>"
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hi</title></head>");
  res.write("<body><h1>Hello form my server</h1></body>");
  res.write("</html>");
  res.end();
}

module.exports = {
  handler: requestHandler,
};
