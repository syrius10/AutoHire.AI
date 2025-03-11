import express from "express";
import { automateHRProcess } from "../services/hrProcessAutomationService.js";

// AI-powered HR process automation

const router = express.Router();

/**
 * @route POST /api/hr-process-automation/automate
 * @desc AI-powered HR process automation
 */
router.post("/automate", async (req, res) => {
  try {
    const { tenure, performanceScore, promotions, salary } = req.body;

    if (!tenure || !performanceScore || !promotions || !salary) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const automationResult = await automateHRProcess(
      tenure,
      performanceScore,
      promotions,
      salary,
    );
    res.json({ automationResult });
  } catch (error) {
    console.error("Error automating HR process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
