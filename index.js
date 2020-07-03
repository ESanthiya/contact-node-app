const server = require("express")();
const config = require("./config/config");
const middleware = require("./middleware/middleware");
const contactRouter = require("./router/contact");
const userRouter = require("./router/user");

//var http = require('http');

// http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');
// }).listen(process.env.PORT);

// server.get('/',(req, res)=>
// {
// res.send('initial load');
// })

server.use(middleware);
server.use("/user", userRouter);
server.use("/contact", contactRouter);

server.listen(config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});
