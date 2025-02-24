import express from "express";
import { analyzeWorkforceAdaptability } from "../services/adaptiveWorkforceService.js";

const router = express.Router();

router.post("/adaptability", analyzeWorkforceAdaptability);

export default router;
