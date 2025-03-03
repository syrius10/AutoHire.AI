import express from "express";
import { resolveDispute } from "../services/disputeResolutionService.js";

const router = express.Router();

/**
 * @route POST /api/dispute-resolution/analyze
 * @desc AI-powered dispute resolution using NLP & predictive analytics
 */
router.post("/analyze", async (req, res) => {
  try {
    const { conversation, contractValue, delayedPayments, unclearTerms, pastDisputes } = req.body;

    if (!conversation || conversation.length === 0) {
      return res.status(400).json({ error: "Missing conversation history for analysis" });
    }

    const resolutionResult = await resolveDispute(conversation, contractValue, delayedPayments, unclearTerms, pastDisputes);
    res.json(resolutionResult);
  } catch (error) {
    console.error("Error in dispute resolution:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
