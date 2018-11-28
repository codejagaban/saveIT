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
            Payments.create(req.body.payment, function(err, payment){
                if (err) {
                    console.log(err);
                    
                    
                } else {
                    payment.save();
                    member.payments.push(payment);
                    member.save();
                    // console.log(totalBalance());
                    
                    res.redirect("" + member._id);

                                        // Get the payment from user, sum it  and return it to as the totalBalance
                    //  function totalBalance(){
                    //     var balance = 0 + req.body.payment;
                    //     balance = parseInt(req.body.payment.amount += balance);
                    //     return balance

                    // };      
                    
                    
                                    }

            });
            
        }
    });
});
// Payments.aggregate({
//     $payment: {
//         totalBalance:

//     }
// })




module.exports = router;

