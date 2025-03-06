import express from "express";
import { analyzeWorkforce } from "../services/decentralizedWorkforceService.js";

// AI-driven global workforce decentralization & management

const router = express.Router();

/**
 * @route POST /api/decentralized-workforce/analyze
 * @desc AI-powered workforce decentralization analysis
 */
router.post("/analyze", async (req, res) => {
  try {
    const { companySize, industry } = req.body;
    if (!companySize || !industry) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workforceAnalysis = await analyzeWorkforce(companySize, industry);
    res.json(workforceAnalysis);
  } catch (error) {
    console.error("Error in workforce decentralization analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
