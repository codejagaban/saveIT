const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNum: String,
    address: String,
    dateOfBirth: String,
    email:String,
    occupation: String,
    gender: String,
    dateJoined: {type: Date, default: Date.now},

    savings: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Savings"
        }
    ]

});

module.exports = mongoose.model("member", memberSchema);