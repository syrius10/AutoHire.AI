import express from "express";
import { assessRegulatoryRisk } from "../services/regulatoryRiskService.js";

// Create a new router instance for the regulatory risk routes

const router = express.Router();

/**
 * @route POST /api/regulatory-risk/assess
 * @desc AI-powered regulatory risk forecasting
 */
router.post("/assess", async (req, res) => {
  try {
    const { region, complianceScore, pastViolations } = req.body;
    if (!region || !complianceScore || !pastViolations) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const riskAssessment = await assessRegulatoryRisk(
      region,
      complianceScore,
      pastViolations,
    );
    res.json({ riskAssessment });
  } catch (error) {
    console.error("Error in regulatory risk assessment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
