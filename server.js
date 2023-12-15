const { write } = require("fs");
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Node!!!!</h1>\n");
  res.end();
  return;
});

server.listen(port, console.log(`server listening on port 3000`));
