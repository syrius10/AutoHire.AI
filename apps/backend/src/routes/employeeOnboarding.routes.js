import express from "express";
import { startOnboarding } from "../services/employeeOnboardingService.js";

// AI-driven automated onboarding

const router = express.Router();

/**
 * @route POST /api/employee-onboarding/start
 * @desc Automates AI-driven employee onboarding
 */
router.post("/start", async (req, res) => {
  try {
    const { employeeName, role, department } = req.body;
    if (!employeeName || !role || !department) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const onboardingResult = await startOnboarding(
      employeeName,
      role,
      department,
    );
    res.json(onboardingResult);
  } catch (error) {
    console.error("Error in AI onboarding:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
