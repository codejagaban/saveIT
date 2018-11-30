const middlewareObj = {};
// middleware
middlewareObj.isLoggedIn = function(req, res, next){
    if (req.isAuthenticated()) {
        return next()
        
    } else {
        req.flash("error");
        res.redirect("/login");
    }
};
module.exports = middlewareObj