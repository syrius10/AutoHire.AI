import express from "express";
import { handleHRChatQuery } from "../services/hrChatbotService.js";

// AI-powered HR chatbot

const router = express.Router();

/**
 * @route POST /api/hr-chatbot/query
 * @desc AI-powered HR chatbot for real-time employee support
 */
router.post("/query", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Query message is required" });
    }

    const response = await handleHRChatQuery(message);
    res.json({ response });
  } catch (error) {
    console.error("Error processing HR chatbot query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
