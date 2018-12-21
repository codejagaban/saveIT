const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    phoneNum : String,
    password: String,

    member: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Members"
        }
    ]
    
});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
