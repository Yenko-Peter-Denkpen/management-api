const mongoose =require("mongoose")

const RentSchema =mongoose.Schema({


location: {
    type: String,
    require:true
},
category: {
    type:String,
    required:true
},
facilities: {
    type: Array,
    require:true
},
numOfrooms: {
    type: Number,
    require:true
},
address: {
    gps: String,
    box: String
},
contact : {
    phone: String,
    email:String
},
price:{
    type:String,
amount:true
},
image:{
    type:String,
    require:true
},
}, {
    timestamps:true
}
)


const Rent = mongoose.model("house", RentSchema)
module.exports=Rent