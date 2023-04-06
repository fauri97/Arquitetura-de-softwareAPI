const http = require("http");
const app = require("./app");
const port = 8080;
const server = http.createServer(app);

console.log("api rodando na porta: ", port);

server.listen(port);
