var mongoose = require("mongoose");
var paymentSchema = new mongoose.Schema({
    amount: Number,
    depositType: String,
    date:{type: Date, default: Date.now},
    totalBalance: Number,
});



module.exports = mongoose.model("Payments", paymentSchema);
