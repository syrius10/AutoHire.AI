import express from "express";
import { getSkillTrends } from "../services/futureSkillTrendsService.js";

const router = express.Router();

router.post("/trends", getSkillTrends);

export default router;
