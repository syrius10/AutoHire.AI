import express from "express";
import { chatWithAI } from "../services/employerCandidateService.js";

// Manages AI-driven employer-candidate interactions.

const router = express.Router();

/**
 * @route POST /api/employer-candidate/chat
 * @desc AI-powered employer-candidate conversation
 */
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await chatWithAI(message);
    res.json({ response });
  } catch (error) {
    console.error("Error in AI chat interaction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
