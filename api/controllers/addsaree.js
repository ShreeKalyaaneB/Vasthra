import Saree from "../modals/AddSaree.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const saree = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const {sareename,fabric,material,collections,price,colorfamily,manufacturer,image, verifyStatus} = req.body;
   
  if (!fabric || !material  || !price || !colorfamily || !manufacturer ) {
    return res
      .status(400)
      .json({ message: "All the fields must be filled" });
  }

  const newSaree = new Saree({sareename,fabric,material,price,collections,colorfamily,manufacturer,verifyStatus});

 

 
    const addedsaree = await newSaree.save();
    console.log("Saree added");
    res.status(200).json(addedsaree);
   
    
  } catch (err) {
    next(err);
  }
};
