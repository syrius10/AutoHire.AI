import express from "express";
import { processVisa } from "../services/globalVisaAutomationService.js";

// AI-driven work visa processing & mobility automation

const router = express.Router();

/**
 * @route POST /api/global-visa-automation/process
 * @desc AI-powered work visa processing
 */
router.post("/process", async (req, res) => {
  try {
    const { applicantCountry, jobCountry, jobRole } = req.body;
    if (!applicantCountry || !jobCountry || !jobRole) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const visaProcessing = await processVisa(
      applicantCountry,
      jobCountry,
      jobRole,
    );
    res.json(visaProcessing);
  } catch (error) {
    console.error("Error in work visa processing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
