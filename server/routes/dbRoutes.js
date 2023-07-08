import express from "express";
import { postCreateTable } from "../controllers/dbController.js";

const router = express.Router();

router.post("/create-table", postCreateTable);

export default router;
