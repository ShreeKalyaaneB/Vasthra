import Sarees from "../modals/AddSaree.js";
export const allSarees = async (req,res,next)=>{
    try {
        const saree = await Sarees.find();
        res.status(200).json({saree});
    } catch (err){
        next(err);
    }
}