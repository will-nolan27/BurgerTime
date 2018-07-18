require("dotenv").config();
var mysql = require("mysql");
var db = require("../config/db_conn");
var connection;

// Setup connection
if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection(db);
}

// Establish MySQL Connection
connection.connect(function(err) {
	if (err){
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;