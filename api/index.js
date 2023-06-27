import express from "express";
import dotenv from "dotenv";
import crypto from "crypto";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import registerUser from "./routes/register.js"
import loginUser from "./routes/login.js"

import allPets from "./routes/allPets.js"
import sareeDetails from "./routes/getDetails.js"
import saree from "./routes/addsaree.js"
import allSarees from "./routes/allSarees.js";
import wishlist from "./routes/wishlist.js"
import addtocart from "./routes/addtocart.js";
import removecart from "./routes/removecart.js";
import removewishlist from "./routes/removewishlist.js";
import removeallwish from "./routes/removeallwish.js";
import removeallcart from "./routes/removeallcart.js";
import imageStatus from "./routes/imageStatus.js";
const app = express()
dotenv.config();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", ["http://localhost:3000"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


    const connect = async () =>{
        try {
            await mongoose.connect(process.env.MONGOO);
            console.log("Connected to mongodb")
    }       catch (error){
            throw error;
    }
    };
    
    mongoose.connection.on("disconnected", ()=>{
        console.log("Mongodb disconnected")
    })
    
    mongoose.connection.on("connected", ()=>{
        console.log("Mongodb connected")
    })
    app.use(cookieParser());
app.use(express.json())

    app.use('/', registerUser)
    app.use('/', loginUser)
    app.use('/', saree)
    app.use('/', allSarees)
    app.use('/', sareeDetails)
    app.use("/", wishlist);
    app.use("/", addtocart);
    app.use("/", removewishlist);
    app.use("/", removecart);
    app.use("/", removeallwish);
    app.use("/", removeallcart);
    app.use("/", imageStatus);
    

    

    app.use((err,req,res,next)=>{
        const errstatus = err.status || 500;
        const errmsg = err.message || "Something went wrong";
        return res.status(errstatus).json({
            success : false,
            status : errstatus,
            message : errmsg,
            stack : err.stack,
    
        })
    })


    app.listen(9800,()=>{
        connect()
        console.log("Connected")
    })
    