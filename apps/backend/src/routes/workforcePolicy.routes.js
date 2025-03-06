import express from "express";
import { generatePolicy } from "../services/workforcePolicyService.js";

// AI-powered global workforce policy generation

const router = express.Router();

/**
 * @route POST /api/workforce-policy/generate
 * @desc AI-generated global workforce policy recommendations
 */
router.post("/generate", async (req, res) => {
  try {
    const { region, economicStatus } = req.body;
    if (!region || !economicStatus) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const policyRecommendation = await generatePolicy(region, economicStatus);
    res.json(policyRecommendation);
  } catch (error) {
    console.error("Error in workforce policy generation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
