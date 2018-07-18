var orm = require("../config/orm");

// Setup burger object with functions that use orm
var burger = {
	viewAll: function(cb) {
		orm.selectAll('burgers', cb);
	},
	addBurger: function(burgerInfo, cb) {
		orm.insertOne('burgers', burgerInfo, cb);
	},
	eatBurger: function(burgerId, cb) {
		orm.updateOne('burgers', [{devoured: true}, {id: burgerId}], cb);
	}
};

module.exports = burger;