import express from "express";
import { predictRetentionRisk } from "../services/proactiveRetentionService.js";

const router = express.Router();

/**
 * @route   POST /api/retention/predict
 * @desc    Predicts employee retention risk
 * @access  Public
 */
router.post("/predict", async (req, res) => {
  try {
    const risk = await predictRetentionRisk(req.body);
    res.json(risk);
  } catch (error) {
    res.status(500).json({ error: "Failed to predict retention risk." });
  }
});

export default router;
