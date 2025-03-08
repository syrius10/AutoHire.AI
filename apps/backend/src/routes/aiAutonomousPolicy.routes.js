import express from "express";
import { generateWorkforcePolicy } from "../services/aiAutonomousPolicyService.js";

// AI-based automated workforce policy creation

const router = express.Router();

/**
 * @route GET /api/ai-autonomous-policy/generate
 * @desc AI-powered workforce policy automation
 */
router.get("/generate", async (req, res) => {
  try {
    const policy = await generateWorkforcePolicy();
    res.json(policy);
  } catch (error) {
    console.error("Error generating AI workforce policy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
