var mongoose = require("mongoose");
var loanSchema = new mongoose.Schema({
    amount: Number,
    depositType: String,
    date:{type: Date, default: Date.now},
    totalBalance: {type:Number, default: 0}
});



module.exports = mongoose.model("Loans", loanSchema);
