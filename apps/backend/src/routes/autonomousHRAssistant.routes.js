import express from "express";
import { hrAssistantQuery } from "../services/autonomousHRAssistantService.js";

// AI-driven HR assistant for hiring & employee support.

const router = express.Router();

/**
 * @route POST /api/hr-assistant/query
 * @desc AI-powered HR assistant for automated HR support
 */
router.post("/query", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required." });
    }

    const response = await hrAssistantQuery(query);
    res.json({ response });
  } catch (error) {
    console.error("Error in HR assistant service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
