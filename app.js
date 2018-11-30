
// GLOBAL CONFIG
const  methodOverride = require("method-override");
const bodyParser = require("body-parser");
const passportLocalMongoose = require("passport-local-mongoose");
const LocalStrategy = require("passport-local");
const passport = require("passport");
const Member = require("./models/member");
const Savings = require("./models/payment");
const User = require("./models/user");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const express = require("express");
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
    secret: "the boom bomb!",
    resave: false,
    saveUninitialized: false,

}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(flash());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


// IMPORTS ALL THE NEEDED ROUTES
const authRoute = require("./routes/authRoute");
const membersRoute = require("./routes/membersRoutes");
// loansRoutes = require("./routes/loansRoutes");
const paymentRoute = require("./routes/paymentRoute");
// searchRoutes = require("./routes/searchRoute");



// USE ALL IMPORTED ROUTES
app.use(authRoute);
app.use( membersRoute);
// app.use(membersRoutes);
// app.use(loansRoutes);
app.use(paymentRoute);
// app.use(searchRoutes);




// SERVER SET UP
app.listen(process.env.PORT || 3200, function(){
    console.log("saveIT app started at localhost:3200");
    
});



