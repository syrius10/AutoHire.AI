import express from "express";
import { checkVisaEligibility } from "../services/workVisaAutomationService.js";

// AI-driven work visa & compliance automation.

const router = express.Router();

/**
 * @route POST /api/work-visa/eligibility
 * @desc AI-powered work visa eligibility check
 */
router.post("/eligibility", async (req, res) => {
  try {
    const { experience, jobOffer, countryStrictness } = req.body;

    if (experience === undefined || jobOffer === undefined || countryStrictness === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await checkVisaEligibility(experience, jobOffer, countryStrictness);
    res.json(result);
  } catch (error) {
    console.error("Error checking visa eligibility:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
