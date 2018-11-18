var express = require("express");

var app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	console.log("Received a request for /");
	res.write("This is the root.");
	res.end();
});

app.get("/home", function(req, res){
	console.log("Received a request for a home page");
	res.render("home");
});

app.listen(process.env.PORT || 5000, () =>
	console.log("It's alive!")
);