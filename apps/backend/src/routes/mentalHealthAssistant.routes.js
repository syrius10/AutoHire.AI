import express from "express";
import { getMentalHealthResponse } from "../services/mentalHealthAssistantService.js";

// AI-powered mental health chatbot for employee support

const router = express.Router();

/**
 * @route POST /api/mental-health
 * @desc AI-powered mental health chatbot
 */
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const response = await getMentalHealthResponse(message);
    res.json({ response });
  } catch (error) {
    console.error("Error in mental health chatbot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
