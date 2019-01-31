const  express = require("express");
const passport = require("passport");
const User = require("../models/user");

const middleware = require("../middlewares/middleware");

router =express.Router();


// LANDS YOU ON THE LANDING PAGE
router.get("/", function(req, res){
    res.render("login")
});



// AUTH ROUTE

// AUTH ROUTES

router.get("/register", function(req, res){
    res.render("register")
});


// handle sign up logic

router.post("/register", function(req, res){
    const newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            req.flash("error",err.message);
            res.redirect("back");
            console.log(err.message);

        } else {
            passport.authenticate("local")(req, res, function(){
                req.flash("success", "Welcome to #saveIT " + user.username);
                res.redirect("/members");
            });

        }
    });
});

// Show login form

router.get("/login", function(req, res){
    res.render("login")
});

// handling login logic

router.post("/login", passport.authenticate("local", {
                                                        successRedirect: "/members",
                                                       failureRedirect: "/login",
                                                    failureFlash: true}
                                                       )
);


// log out route
router.get("/logout", function(req, res){
    req.logOut();
    req.flash("success", "You logged out");
    res.redirect("/login")
});





module.exports = router;