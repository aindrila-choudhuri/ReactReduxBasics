const http = require("http");
const app = require("./app");

const server = http.createServer(app);
app.set('port', '9001');

server.listen("9001")