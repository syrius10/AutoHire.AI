import express from "express";
import { predictBurnoutRisk } from "../services/burnoutRiskService.js";

const router = express.Router();

/**
 * @route   POST /api/burnout/predict
 * @desc    Predicts burnout risk based on workload and stress level
 * @access  Public
 */
router.post("/predict", async (req, res) => {
  try {
    const risk = await predictBurnoutRisk(req.body);
    res.json(risk);
  } catch (error) {
    res.status(500).json({ error: "Failed to predict burnout risk." });
  }
});

export default router;
