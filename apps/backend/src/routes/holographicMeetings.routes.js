import express from "express";
import { optimizeMeeting } from "../services/holographicMeetingsService.js";

// AI-based holographic meeting automation.

const router = express.Router();

/**
 * @route POST /api/holographic-meetings/enhance
 * @desc AI-powered holographic meeting optimization
 */
router.post("/enhance", async (req, res) => {
  try {
    const { participants, languageDiversity } = req.body;
    if (!participants || languageDiversity === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const meetingEnhancements = await optimizeMeeting(participants, languageDiversity);
    res.json({ enhancements: meetingEnhancements });
  } catch (error) {
    console.error("Error optimizing holographic meetings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
