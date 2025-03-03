import express from "express";
import { evaluateHiringDecision } from "../services/ethicalHiringService.js";

const router = express.Router();

/**
 * @route POST /api/ethical-hiring/evaluate
 * @desc AI-powered ethical hiring bias detection
 */
router.post("/evaluate", async (req, res) => {
  try {
    const {
      genderBias,
      ageBias,
      ethnicBias,
      disabilityInclusionScore,
      experience,
      skillMatch,
      educationLevel,
      biasHistory,
    } = req.body;

    if (
      genderBias === undefined ||
      ageBias === undefined ||
      ethnicBias === undefined ||
      disabilityInclusionScore === undefined ||
      experience === undefined ||
      skillMatch === undefined ||
      educationLevel === undefined ||
      biasHistory === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hiringEvaluation = await evaluateHiringDecision(
      genderBias,
      ageBias,
      ethnicBias,
      disabilityInclusionScore,
      experience,
      skillMatch,
      educationLevel,
      biasHistory
    );

    res.json({ hiringEvaluation });
  } catch (error) {
    console.error("Error in ethical hiring evaluation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
