import express from "express";
import { detectBias } from "../services/ethicalHiringService.js";

// AI-based hiring bias detection & ethical enforcement

const router = express.Router();

/**
 * @route POST /api/ethical-hiring/detect
 * @desc AI-powered hiring bias detection
 */
router.post("/detect", async (req, res) => {
  try {
    const biasReport = await detectBias(req.body);
    res.json(biasReport);
  } catch (error) {
    console.error("Error in hiring bias detection:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
