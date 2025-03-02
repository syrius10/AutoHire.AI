import express from "express";
import { scheduleMeeting, generateFollowUpTasks } from "../services/meetingAutomationService.js";

// AI-powered meeting scheduling & automation

const router = express.Router();

/**
 * @route POST /api/meeting-automation/schedule
 * @desc AI-powered meeting scheduling
 */
router.post("/schedule", async (req, res) => {
  try {
    const { participants, agenda, dateTime } = req.body;
    if (!participants || !agenda || !dateTime) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const meetingDetails = await scheduleMeeting(participants, agenda, dateTime);
    res.json(meetingDetails);
  } catch (error) {
    console.error("Error scheduling meeting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/meeting-automation/follow-up
 * @desc AI-generated meeting follow-up tasks
 */
router.post("/follow-up", async (req, res) => {
  try {
    const { meetingId } = req.body;
    if (!meetingId) {
      return res.status(400).json({ error: "Meeting ID is required" });
    }

    const followUpTasks = await generateFollowUpTasks(meetingId);
    res.json(followUpTasks);
  } catch (error) {
    console.error("Error generating follow-up tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
