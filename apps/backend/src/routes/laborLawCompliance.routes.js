import express from "express";
import { checkLaborCompliance } from "../services/laborLawComplianceService.js";

// Create a new router instance for labor law compliance routes

const router = express.Router();

/**
 * @route POST /api/labor-law-compliance/check
 * @desc AI-driven labor law compliance monitoring
 */
router.post("/check", async (req, res) => {
  try {
    const { contractType, rightsScore, complianceHistory } = req.body;
    if (!contractType || !rightsScore || !complianceHistory) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const complianceStatus = await checkLaborCompliance(
      contractType,
      rightsScore,
      complianceHistory,
    );
    res.json({ complianceStatus });
  } catch (error) {
    console.error("Error in labor law compliance check:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
