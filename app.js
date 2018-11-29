
// GLOBAL CONFIG
const passportLocalMongoose = require("passport-local-mongoose");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const Member = require("./models/member")
const Payments = require("./models/payment");
const User = require("./models/user");
const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const app = express();

// MONGOOSE CONFIG
const DB_URL = process.env.DB_URL;
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(DB_URL);
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");


// PASSPORT CONFIG
app.use(require("express-session")({
    secret : "The Web App",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});




// IMPORTS ALL THE NEEDED ROUTES
const indexRoutes = require("./routes/indexRoute");
const membersRoutes = require("./routes/membersRoutes");
// loansRoutes = require("./routes/loansRoutes");
const paymentRoute = require("./routes/paymentRoute");
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



