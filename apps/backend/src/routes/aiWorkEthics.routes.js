import express from "express";
import { checkWorkEthics } from "../services/aiWorkEthicsService.js";

// AI-powered work ethics compliance API

const router = express.Router();

/**
 * @route GET /api/ai-work-ethics/compliance
 * @desc AI-powered work ethics compliance check
 */
router.get("/compliance", async (req, res) => {
  try {
    const ethicsResult = await checkWorkEthics();
    res.json(ethicsResult);
  } catch (error) {
    console.error("Error evaluating AI work ethics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
