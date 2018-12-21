const express = require("express");
const Member = require("../models/member");
const Savings = require("../models/savings");
const middleware = require("../middlewares/middleware");
const router = express.Router({mergeParams: true});


router.get("/members/:id/savings/new", middleware.isLoggedIn, function(req, res){

    Member.findById(req.params.id, function(err, member){
        if (err) {
            console.log(err);
            
            
        } else {
            res.render("savings/new", {member: member});
            
        }
    });
});

router.post("/members/:id", middleware.isLoggedIn, function(req, res){
    Member.findById(req.params.id, async function(err, member){
        if (err) {

            console.log(err);
            
            
        } else {


            // 1.GET THE LAST totalBalance FROM THE DB AND STORE TO balance
          
            
           

           
            // 1.GET THE LAST totalBalance FROM THE DB AND STORE TO balance
            let balance = await Savings.findOne({}).sort({ date: -1 });

            if (balance === null) {
              balance = 0;
;
            };





            Savings.create(req.body.saving, function(err, saving){
                if (err) {
                    console.log(err);
                    
                    
                } else {

                    saving.totalBalance = Number(req.body.saving.amount)  + balance.totalBalance;
                
                    // 4.Save to DB
                    console.log(typeof(balance.totalBalance));
                    
                    console.log(typeof(req.body.saving.amount));
                    console.log(typeof(saving.amount));
                    
                    
                    saving.save();
                
                    // console.log(saving);
                    member.savings.push(saving);
                    member.save();


                    res.redirect("" + member._id);
                }

            });
            
        }
    });
});






module.exports = router;

