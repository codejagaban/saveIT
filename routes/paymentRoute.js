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

