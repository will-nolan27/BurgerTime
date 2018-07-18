var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Start Express app
var app = express();

// Setup Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Setup Handlebars with custom helpers
// notDevoured returns true if the arg (devoured boolean) is false
// isDevoured returns true if the arg (devoured boolean) is true
app.engine("handlebars", exphbs({ 
	defaultLayout: "main",
	helpers: {
		notDevoured: function(arg, options){
			if (arg === 0){
				return options.fn(this);
			}
		},
		isDevoured: function(arg, options){
			if (arg === 1){
				return options.fn(this);
			}
		}
	}
}));
app.set("view engine", "handlebars");

// Setup Port
var PORT = process.env.PORT || 3000;

// Route Controller
// =============================================================
var routes = require("./controllers/burgers_controller");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});