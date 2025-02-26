import express from "express";
import { analyzeSkillGaps } from "../services/skillGapEnhancementService.js";

// AI-generated skill gap analysis & training paths.

const router = express.Router();

router.post("/", analyzeSkillGaps);

export default router;
