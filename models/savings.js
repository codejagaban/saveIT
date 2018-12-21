var mongoose = require("mongoose");
var savingsSchema = new mongoose.Schema({
    amount:{type:Number, default: 0},
    depositType: String,
    date:{type: Date, default: Date.now},
    totalBalance: {type:Number, default: 0,}
});



module.exports = mongoose.model("Savings", savingsSchema);
