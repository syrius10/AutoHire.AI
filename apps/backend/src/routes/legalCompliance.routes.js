import express from "express";
import { checkCompliance } from "../services/legalComplianceService.js";

const router = express.Router();

/**
 * @route POST /api/legal-compliance/check
 * @desc AI-powered compliance check & legal risk assessment
 */
router.post("/check", async (req, res) => {
  try {
    const { country, terms, contract_length, compliance_score, past_disputes } = req.body;

    if (!country || !terms) {
      return res.status(400).json({ error: "Missing required fields: country and terms" });
    }

    const complianceResult = await checkCompliance(country, terms, contract_length, compliance_score, past_disputes);
    res.json(complianceResult);
  } catch (error) {
    console.error("Error in legal compliance check:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

