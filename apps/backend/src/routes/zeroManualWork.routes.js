import express from "express";
import { automateWorkforceOperations } from "../services/zeroManualWorkService.js";

// AI-powered full automation of company workforce operations.

const router = express.Router();

/**
 * @route GET /api/zero-manual-work/automate
 * @desc AI-powered full automation of workforce operations
 */
router.get("/automate", async (req, res) => {
  try {
    const automationTask = await automateWorkforceOperations();
    res.json({ automationTask });
  } catch (error) {
    console.error("Error automating workforce:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
