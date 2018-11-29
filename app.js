
// GLOBAL CONFIG
const  methodOverride = require("method-override");
const bodyParser = require("body-parser");
const Member = require("./models/member"),
const Savings = require("./models/payment"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

// MONGOOSE CONFIG
const DB_URL = process.env.DB_URL;
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(DB_URL);
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");



// IMPORTS ALL THE NEEDED ROUTES
var indexRoutes = require("./routes/indexRoute"),
membersRoutes = require("./routes/membersRoutes");
// loansRoutes = require("./routes/loansRoutes"),
paymentRoute = require("./routes/paymentRoute"),
// searchRoutes = require("./routes/searchRoute");



// USE ALL IMPORTED ROUTES
app.use(indexRoutes);
app.use( "/members", membersRoutes);
// app.use(membersRoutes);
// app.use(loansRoutes);
app.use("/members/:id", paymentRoute);
// app.use(searchRoutes);




// SERVER SET UP
app.listen(process.env.PORT || 3200, function(){
    console.log("saveIT app started at localhost:3200");
    
});



