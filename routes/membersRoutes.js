var express = require("express"),
router = express.Router(),
Member = require("../models/member");

// GET ALL THE MEMBERS FROM THE DB AND SHOW ON THE BROWSER
router.get("/", function(req, res){
    Member.find({}, function(err, members){
        if (err) {
            console.log(err);
            
            
        } else {
            res.render("members/", {members : members} )
        }
    });

    
});

// GOES THE NEW MEMBER FORM
router.get("/new", function(req, res){
    res.render("members/new");
});


// CREATE A NEW MEMBER AND ADD IT TO THE OTHER MEMBERS
router.post("/", function( req, res ){
    Member.create(req.body.member, function(err, member ){
        if (err) {
            console.log(err);
            
            
        } else {
            res.redirect("members/");
            console.log(member);
            

            
        }
    });
});


// show more info about a member 

router.get("/:id", function(req, res){

    Member.findById(req.params.id).populate("payments").exec(function(err, foundMember){
        if(err) {
            console.log(err)
        } else {
            res.render("members/show", {member: foundMember});
        }        
    });
   
});

module.exports = router;
