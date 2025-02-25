import express from "express";
import { analyzeCompetition } from "../services/competitionAnalysisService.js";

// Provides competitor rate analysis.

const router = express.Router();

router.post("/competitor-rates", async (req, res) => {
  const result = await analyzeCompetition(req.body.level);
  res.json(result);
});

export default router;
