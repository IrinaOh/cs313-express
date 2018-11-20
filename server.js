var express = require("express");
const app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

// app.get("/", function(req, res){
// 	console.log("Received a request for /");
// 	res.write("This is the root.");
// 	res.end();
// });

// app.get("/home", function(req, res){
// 	console.log("Received a request for a home page");
// 	res.render("home");
// });

app.listen(process.env.PORT || 5000, () =>
	console.log("It's alive!")
);

app.get('/home', calcRate(res, req));
// app.listen(app.get('port'), function() {
//     console.log('App running on port ', app.get('port'))
// })
function calcRate(req, res) {
    var type = req.query.type
    var weight = Number(req.query.weight)
    doMath(res, type, weight)
}
function doMath(res, type, weight) {
    var rate = 0;
    switch (type)
    {
        case "stamped":
	      var base = 0.50;
	      if (weight > 3.5) {
	        return "For weights larger than 3.5 please select 'Large Envelopes' or 'First Class Package' option";
	      }else{
	        rate = Math.floor(weight) * 0.21 + base;
	      }
            break;
        case "metered":
      var base = 0.47;
      if (weight > 3.5) {
        return "For weights larger than 3.5 please select 'Large Envelopes' or 'First Class Package' option";
      }else{
        rate = Math.floor(weight) * 0.21 + base;
      }
            break;
        case "flats":
      var base = 1;
      if (weight > 13) {
        return "Weight cannot be over 13 oz.";
      }else{
        rate = Math.floor(weight) * 0.21 + base;
      }
            break;
        case "package":
    var base = 3.75;
      if(0 < weight <= 4){
        rate = 3.50;
        return rate;
      }else if(4 < weight <= 8){
        rate = 3.75;
        return rate;
      }else if( 8 < weight <= 13){
        rate = (Math.floor(weight) - 8) * 0.35 + base;
        return rate;
      } else{
        return "Weight cannot be less than 0 oz.";
      }
            break;
    }
    var calc =
    {
        type: type,
        weight: weight,
    	rate:rate
    }
    res.render('pages/result', calc);
}




