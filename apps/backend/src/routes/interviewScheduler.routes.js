import express from "express";
import { scheduleInterview } from "../services/interviewSchedulerService.js";

const router = express.Router();

/**
 * @route POST /api/interview-scheduler/schedule
 * @desc AI-powered interview scheduling assistant
 */
router.post("/schedule", async (req, res) => {
  try {
    // Extract fields
    const { candidateEmail, recruiterEmail, timeSlot, candidateName, jobRole } = req.body;

    // Validate input
    if (!candidateEmail || !recruiterEmail || !timeSlot) {
      if (!candidateName || !jobRole) {
        return res.status(400).json({ error: "Missing required fields" });
      }
    }

    // Call scheduling service
    const confirmation = await scheduleInterview({ 
      candidateEmail, 
      recruiterEmail, 
      timeSlot, 
      candidateName, 
      jobRole 
    });

    res.json(confirmation);
  } catch (error) {
    console.error("Error in AI interview scheduling:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
