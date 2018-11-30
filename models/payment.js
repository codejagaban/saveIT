var mongoose = require("mongoose");
var paymentSchema = new mongoose.Schema({
    amount: {type: Number, default: 0},
    depositType: String,
    date:{type: Date, default: Date.now},
    totalBalance: {type:Number, default: this.amount}
});



module.exports = mongoose.model("Payments", paymentSchema);
