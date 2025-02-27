import express from "express";
import { processHRAutomation } from "../services/hrAutomationService.js";

// Automates core HR processes (hiring, payroll, onboarding, benefits).

const router = express.Router();

/**
 * @route POST /api/hr-automation/process
 * @desc AI-powered HR workflow automation (hiring, payroll, onboarding, benefits)
 */
router.post("/process", async (req, res) => {
  try {
    const hrData = req.body;
    if (!hrData) {
      return res.status(400).json({ error: "HR data is required" });
    }

    const automationResult = await processHRAutomation(hrData);
    res.json(automationResult);
  } catch (error) {
    console.error("HR Automation Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
