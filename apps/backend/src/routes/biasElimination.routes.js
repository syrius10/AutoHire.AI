import express from "express";
import { detectAndEliminateBias } from "../services/biasEliminationService.js";

const router = express.Router();

/**
 * @route POST /api/bias-elimination/detect
 * @desc AI-powered bias detection & elimination in hiring and workforce decisions.
 */
router.post("/detect", async (req, res) => {
  try {
    const { genderBias, ageBias, ethnicBias, skillMatch, hiringHistory } =
      req.body;

    if (
      genderBias === undefined ||
      ageBias === undefined ||
      ethnicBias === undefined ||
      skillMatch === undefined ||
      hiringHistory === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const biasAnalysis = await detectAndEliminateBias(
      genderBias,
      ageBias,
      ethnicBias,
      skillMatch,
      hiringHistory,
    );

    res.json({ biasAnalysis });
  } catch (error) {
    console.error("Error detecting bias:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
