import express from "express";
import { estimateTaxes } from "../services/freelancerTaxService.js";

// AI-driven automated tax planning.

const router = express.Router();

/**
 * @route POST /api/freelancer-tax/estimate
 * @desc AI-powered freelancer tax estimation
 */
router.post("/estimate", async (req, res) => {
  try {
    const { annualIncome, deductions } = req.body;
    if (annualIncome === undefined || deductions === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const taxEstimate = await estimateTaxes(annualIncome, deductions);
    res.json({ estimatedTax: taxEstimate });
  } catch (error) {
    console.error("Error estimating freelancer taxes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
