import express from "express";
import { analyzeSustainability } from "../services/sustainableWorkforceService.js";

// AI-driven workforce sustainability optimization

const router = express.Router();

/**
 * @route POST /api/sustainable-workforce/analyze
 * @desc AI-powered workforce sustainability assessment
 */
router.post("/analyze", async (req, res) => {
  try {
    const sustainabilityReport = await analyzeSustainability(req.body);
    res.json(sustainabilityReport);
  } catch (error) {
    console.error("Error in workforce sustainability analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
