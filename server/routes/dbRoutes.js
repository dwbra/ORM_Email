import express from "express";
import { postCreateTable, postDropTable } from "../controllers/dbController.js";

const router = express.Router();

router.post("/create-table", postCreateTable);
router.post("/drop-table", postDropTable);

export default router;
