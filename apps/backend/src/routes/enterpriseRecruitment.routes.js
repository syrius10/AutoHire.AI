import express from "express";
import { screenCandidates } from "../services/enterpriseRecruitmentService.js";

// Automates large-scale candidate screening.

const router = express.Router();

/**
 * @route POST /api/enterprise-recruitment/screen
 * @desc AI-driven candidate screening for enterprise hiring
 * @access Public
 */
router.post("/screen", async (req, res) => {
  try {
    const candidates = req.body.candidates; // Array of candidate profiles
    const screeningResults = await screenCandidates(candidates);
    res.json(screeningResults);
  } catch (error) {
    console.error("Error in enterprise candidate screening:", error);
    res.status(500).json({ error: "Failed to process candidate screening." });
  }
});

export default router;
