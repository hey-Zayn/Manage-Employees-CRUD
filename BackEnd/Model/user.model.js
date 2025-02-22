const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
       },
       fatherName:{
        type: String,
       },
       email:{
        type: String,
       },
      phone:{
        type: String,
       },
},{timestamps:true});

const userModel =  mongoose.model("crudUser",userSchema);

module.exports = userModel
