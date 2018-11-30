const express = require("express");
const Member = require("../models/member");
const Payments = require("../models/payment");
const middleware = require("../middlewares/middleware");
const router = express.Router({mergeParams: true});


router.get("/members/:id/payments/new", middleware.isLoggedIn, function(req, res){

    Member.findById(req.params.id, function(err, member){
        if (err) {
            console.log(err);
            
            
        } else {
            res.render("payments/new", {member: member});
            
        }
    });
});

router.post("/members/:id", middleware.isLoggedIn, function(req, res){
    Member.findById(req.params.id, async function(err, member){
        if (err) {

            console.log(err);
            
            
        } else {
           

            
             // 1.GET THE LAST totalBalance FROM THE DB AND STORE TO balance
             let balance = await Payments.findOne({}).sort({ date: -1 });

             if (balance === null) {
               balance = 0;
             }
             
      
            console.log(balance.totalBalance);
            

            Payments.create(req.body.payment, function(err, payment){
                if (err) {
                    console.log(err);
                    
                    
                } else {
                    console.log(typeof(payment.amount));
                    
                    console.log(typeof(payment.totalBalance));
                    
                 
                     
                    payment.totalBalance = balance.totalBalance + payment.amount;

                    // 4.Save to DB
                    payment.save();
                    
                
                    // console.log(payment);
                    member.payments.push(payment);
                    member.save();


                    res.redirect("" + member._id);
                }

            });
            
        }
    });
});






module.exports = router;

