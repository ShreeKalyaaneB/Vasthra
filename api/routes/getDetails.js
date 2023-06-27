import express from "express";

import { saree } from "../controllers/getDetails.js";
const router= express.Router();


router.get("/description/:_id", saree);

export default router;