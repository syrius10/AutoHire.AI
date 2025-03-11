import express from "express";
import { detectFraudulentProfile } from "../services/fraudulentProfileDetectionService.js";

// API to identify fake freelancer profiles and prevent scams.

const router = express.Router();

/**
 * @route POST /api/fraudulent-profile-detection/analyze
 * @desc Identifies fraudulent freelancer profiles using AI
 */
router.post("/analyze", async (req, res) => {
  try {
    const result = await detectFraudulentProfile(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error detecting fraudulent profiles" });
  }
});

export default router;
