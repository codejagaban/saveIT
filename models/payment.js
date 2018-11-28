var mongoose = require("mongoose");
var paymentSchema = new mongoose.Schema({
    amount: String,
    depositType: String,
    date:{type: Date, default: Date.now},
    balance: String,
});




module.exports = mongoose.model("Payments", paymentSchema);
