import Saree from "../modals/AddSaree.js"

export const removeallwishlist = async (req, res) => {
  try {
    await Saree.updateMany({}, { $set: { isWishlisted: "not wishlisted" } });

    res.status(200).json({ message: "Wishlist updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

