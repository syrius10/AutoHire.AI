import express from "express";
import { assignProductivityTokens } from "../services/productivityTokensService.js";

// AI-powered tokenized work productivity incentive tracking.

const router = express.Router();

/**
 * @route POST /api/productivity-tokens/assign
 * @desc Assigns AI-driven tokenized work productivity incentives.
 */
router.post("/assign", async (req, res) => {
  try {
    const { work_hours, task_completion_rate, peer_review_score } = req.body;
    if (!work_hours || !task_completion_rate || !peer_review_score) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const tokens = await assignProductivityTokens(work_hours, task_completion_rate, peer_review_score);
    res.json({ productivity_tokens: tokens });
  } catch (error) {
    console.error("Error assigning productivity tokens:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
