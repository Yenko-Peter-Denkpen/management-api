const mongoose =require("mongoose");
const { string } = require("yup");
const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        require:true
    }

},{
    timestamps:true
})
const User=mongoose.model("users", userSchema);
module.exports=User;