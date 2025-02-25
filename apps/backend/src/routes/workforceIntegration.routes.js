import express from "express";
import { analyzeWorkforceIntegration } from "../services/workforceIntegrationService.js";

const router = express.Router();

router.post("/analyze", analyzeWorkforceIntegration);

export default router;
