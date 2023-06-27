import express from "express";
import { saree } from "../controllers/addsaree.js";
const router = express.Router();

router.post("/addsarees", saree);


export default router;