import express from "express";
import { allSarees } from "../controllers/allsarees.js";

const router = express.Router();

router.get("/allsarees", allSarees);


export default router;