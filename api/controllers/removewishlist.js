import Saree from "../modals/AddSaree.js"

export const removewishlist = async (req, res) => {
    try {
      
      const wishlist = await Saree.findOne({ _id: req.params._id });

  
     
  
      wishlist.isWishlisted = "not wishlisted";
      await wishlist.save();
      console.log(wishlist)
  
      res.status(200).json({ wishlist:wishlist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
