var express = require("express"),
Member = require("../models/member"),
Payments = require("../models/payment"),
router = express.Router({mergeParams: true});


router.get("/payments/new", function(req, res){

    Member.findById(req.params.id, function(err, member){
        if (err) {
            console.log(err);
            
            
        } else {
            res.render("payments/new", {member: member});
            
        }
    });
});

router.post("/", function(req, res){
    Member.findById(req.params.id, function(err, member){
        if (err) {

            console.log(err);
            
            
        } else {
            
                    // 1. get the payment Object model

            Payments.create(req.body.payment, async function(err, payment){
                if (err) {
                    console.log(err);
                    
                    
                } else {
                    

                    // 2.store the payment amount in current amoun
                    var currentBalance = await Payments.findOne({}, 'totalBalance').sort('-created_at');
                    console.log(currentBalance.totalBalance);
                    
                    // 3 store the currentAmount and the amount and pass it to the totalBalance
                     payment.totalBalance = 200;

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

