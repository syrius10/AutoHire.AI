import express from "express";
import { checkRegulatoryCompliance } from "../services/regulatoryComplianceService.js";

// AI-powered HR compliance & risk management.

const router = express.Router();

/**
 * @route POST /api/regulatory-compliance/check
 * @desc AI-powered HR compliance & risk assessment
 */
router.post("/check", async (req, res) => {
  try {
    const policyText = req.body.policy;
    if (!policyText) {
      return res.status(400).json({ error: "Policy text is required" });
    }

    const complianceResult = await checkRegulatoryCompliance(policyText);
    res.json(complianceResult);
  } catch (error) {
    console.error("Regulatory Compliance Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
