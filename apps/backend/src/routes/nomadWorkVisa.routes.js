import express from "express";
import { processWorkVisa } from "../services/nomadWorkVisaService.js";

// Handles AI-powered work visa processing for digital nomads.

const router = express.Router();

/**
 * @route POST /api/nomad-work-visa/process
 * @desc AI-powered global work visa processing & mobility support.
 */
router.post("/process", async (req, res) => {
  try {
    const { visaScore, skillShortage, jobMatch, experienceYears } = req.body;
    
    if (!visaScore || skillShortage === undefined || jobMatch === undefined || experienceYears === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const visaResult = await processWorkVisa(visaScore, skillShortage, jobMatch, experienceYears);
    res.json(visaResult);
  } catch (error) {
    console.error("Error in work visa processing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
