import express from "express";
import { autoApplyForJobs } from "../services/applicationAutomationService.js";

// AI-based job application automation

const router = express.Router();

/**
 * @route POST /api/application-automation
 * @desc AI-based job application automation
 */
router.post("/", async (req, res) => {
  try {
    const { candidateName, jobTitle, companyName, resume, coverLetter } = req.body;
    if (!candidateName || !jobTitle || !companyName || !resume || !coverLetter) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const applicationResult = await autoApplyForJobs(candidateName, jobTitle, companyName, resume, coverLetter);
    res.json(applicationResult);
  } catch (error) {
    console.error("Error automating job application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
