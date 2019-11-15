const mongoose = require('mongoose');

const userModel= mongoose.Schema({
    username: String ,
    password : String,
    email : String
}) ;
module.exports = mongoose.model("userModel",userModel);
