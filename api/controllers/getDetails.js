import Sarees from "../modals/AddSaree.js";
export const saree = async (req, res, next) => {
  try {
    
    const user = await Sarees.findById(req.params._id);
    console.log(user)
    res.status(200).json({user:user});
  } catch (err) {
    next(err);
  }
};
