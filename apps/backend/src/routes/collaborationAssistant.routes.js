import express from "express";
import { getCollaborationInsights } from "../services/collaborationAssistantService.js";

// AI-driven workforce collaboration insights

const router = express.Router();

/**
 * @route GET /api/collaboration-assistant/insights
 * @desc AI-driven workforce collaboration insights
 */
router.get("/insights", async (req, res) => {
  try {
    const insights = await getCollaborationInsights();
    res.json(insights);
  } catch (error) {
    console.error("Error fetching collaboration insights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
