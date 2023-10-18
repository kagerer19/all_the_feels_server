/* http core module has the ability to launch a server */
const http = require('http');

/* creates a server and accepts a requestListener function that has two parameters: HTTP request(req) and response(res).  */
const routes = require("./routes");
const server = http.createServer(routes);

/* listen for incoming requests from the browser*/
server.listen(3000);




