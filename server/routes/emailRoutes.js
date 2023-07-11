import express from "express";
import { postEmail } from "../controllers/emailController.js";

//initialise express router to gain access to all routing methods
const router = express.Router();

router.post("/", postEmail);

export default router;
