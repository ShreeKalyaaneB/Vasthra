import mongoose from "mongoose";
import  Schema  from "mongoose";

const Products = new mongoose.Schema({
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
        required : true,
    },

},{timestamps:true})


export default mongoose.model("Product", Products)