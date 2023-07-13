import Sarees from "../modals/SellPets.js";

export const getData = async (req, res, next) => {
  try {
    let { sareeID } = req.query; // Extract petIds from query parameters

    // Check if petIds is a single ID or multiple IDs
    if (!Array.isArray(sareeID)) {
      // Convert single ID to an array
      sareeID = [sareeID];
    }

    const petDetails = await Sarees.find({ _id: { $in: sareeID } }); // Find pets by matching IDs in the petIds array

    res.status(200).json(petDetails);
  } catch (err) {
    next(err);
  }
};
