var connection= require("../config/connection.js");


var orm = {
	selectAll: function(db_table, cb) {
		connection.query('SELECT * FROM ' + db_table + ';', cb);
	},
	insertOne: function(db_table, userInput, cb) {
		connection.query('INSERT INTO burgers SET ?', userInput, cb);
	},
	updateOne: function(db_table, userInput, cb) {
		connection.query('UPDATE burgers SET ? WHERE ?', userInput, cb);
	}
};

module.exports = orm;