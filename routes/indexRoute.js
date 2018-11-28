var express = require("express"),
router =express.Router();

// LANDS YOU ON THE LANDING PAGE
router.get("/", function(req, res){
    res.render("landing")
});



module.exports = router;