var mongoose = require("mongoose");
var memberSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNum: String,
    address: String,
    dateOfBirth: String,
    email:String,
    occupation: String,
    gender: String,
    dateJoined: {type: Date, default: Date.now},

    payments: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Payments"
        }
    ]

});

module.exports = mongoose.model("member", memberSchema);