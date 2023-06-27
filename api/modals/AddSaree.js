import mongoose from "mongoose";
import  Schema  from "mongoose";

const Sarees = new mongoose.Schema({
    fabric:{
        type : String,
        required : true,
    },
    material:{
        type : String,
        required : true,
    },
    price:{
        type : String,
        required : true,
    },
    colorfamily:{
        type : String,
        required : true,
    },
    manufacturer:{
        type : String,
        required : true,
    },
    image:{
        type: String,
    },
    isWishlisted:{
        type: String,
        default: "not wishlisted"
    },
    verifyStatus:{
        type: String,
        required : true,
        default: "not verified"
    },

},{timestamps:true})


export default mongoose.model("Sarees", Sarees)