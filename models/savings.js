var mongoose = require("mongoose");
var savingSchema = new mongoose.Schema({
   savingBalance: String
});




module.exports = mongoose.model("Savings", savingSchema);
