import mongoose from "mongoose";
import  Schema  from "mongoose";

const SellPets = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    age:{
        type : String,
        required : true,
    },
    owner:{
        type : String,
        required : true,
    },
    category:{
        type : String,
        required : true,
    },
    breed:{
        type : String,
        required : true,
    },
    gender:{
        type : String,
        required : true,
    },
    price:{
        type: String,
        default: 0,
    },
    location:{
        type: String,
        required : true,
    },

},{timestamps:true})


export default mongoose.model("Sell", SellPets)