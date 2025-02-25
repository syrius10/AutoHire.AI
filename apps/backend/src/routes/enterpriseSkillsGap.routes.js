import express from "express";
import { analyzeSkillsGap } from "../services/enterpriseSkillsGapService.js";

const router = express.Router();

router.post("/skills-gap", analyzeSkillsGap);

export default router;
