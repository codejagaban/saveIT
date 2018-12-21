const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/middleware");
const Member = require("../models/member");
const Savings = require("../models/savings");

// GET ALL THE MEMBERS FROM THE DB AND SHOW ON THE BROWSER
router.get("/members",middleware.isLoggedIn, function(req, res){
    Member.find({}, function(err, members){
        if (err) {
            console.log(err);
            
            
        } else {
            res.render("members/", {members : members} )
        }
    });

    
});
        
// GOES THE NEW MEMBER FORM
router.get("/members/new",middleware.isLoggedIn, function(req, res){
    res.render("members/new");
});


// CREATE A NEW MEMBER AND ADD IT TO THE OTHER MEMBERS
router.post("/members",middleware.isLoggedIn, function( req, res ){
    Member.create(req.body.member, function(err, member ){
        if (err) {
            console.log(err);
            
            
        } else {
            Savings.create(req.body.saving, function(err, saving){
                if (err) {
                    console.log(err);
                    
                    
                } else {
                
                  
                    saving.save();
                
                    // console.log(payment);
                    member.savings.push(payment);
                  
            res.redirect("members/");
            console.log(member);
            

            
        }
    });
};
    });
});


// show more info about a member 

router.get("/members/:id",middleware.isLoggedIn, function(req, res){

    Member.findById(req.params.id).populate("payments").exec(function(err, foundMember){
        if(err) {
            console.log(err)
        } else {
            res.render("members/show", {member: foundMember});
        }        
    });
   
});


module.exports = router;
