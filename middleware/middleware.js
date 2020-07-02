const server = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require("./../config/config");
const userController = require('./../controller/user');

server.use(cors({
	origin: 'http://localhost',
	// credentials: true
}));
server.use("/", (req, res, next) => {
	let { protocal, host, port, name } = config.app.db;
	mongoose.connect(process.env.MONGODB_URI || `${username}:${password}@${protocal}${host}:${port}/${name}`, { useNewUrlParser: true, useCreateIndex:true, useMongoClient : true});
	next();
	// mongodb://user:password123@ds019856.mlab.com:19856/heroku_3xm0068v
});

server.use(['/contact'], async (req, res, next) => {
	if(!req.headers.authorization){
		return res.send({
			status: 'error',
			msg: 'Invalid Token'
		})
	}

	await userController.validateToken(res, req.headers.authorization);

	next();
})

server.use(bodyParser.json());

module.exports = server;
