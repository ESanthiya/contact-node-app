const server = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
var db = process.env.MONGODB_URL ||'mongodb://user:password123@ds019856.mlab.com:19856/heroku_3xm0068v';
const config = require("./../config/config");



server.use(bodyParser.json());


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds019856.mlab.com:19856/heroku_3xm0068v", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();

  console.log("Database connection ready");

});



module.exports = server;
