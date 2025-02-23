import express from "express";
import { scheduleInterview } from "../services/interviewSchedulerService";

const router = express.Router();

/**
 * Schedule an interview
 */
router.post("/schedule", async (req, res) => {
    const { candidateEmail, recruiterEmail, timeSlot } = req.body;
    if (!candidateEmail || !recruiterEmail || !timeSlot) return res.status(400).json({ error: "Missing required fields" });

    const result = await scheduleInterview(candidateEmail, recruiterEmail, timeSlot);
    res.json(result);
});

export default router;