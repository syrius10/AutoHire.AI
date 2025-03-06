import express from "express";
import { trackFinancialHealth } from "../services/decentralizedFinanceService.js";

// AI-based workforce financial tracking & decentralized payroll.

const router = express.Router();

/**
 * @route POST /api/decentralized-finance/track
 * @desc AI-driven workforce financial tracking & decentralized payroll automation.
 */
router.post("/track", async (req, res) => {
  try {
    const { total_earnings, expenses, tax_rate, blockchain_tx_fees } = req.body;
    if (!total_earnings || !expenses || !tax_rate || !blockchain_tx_fees) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const financeData = await trackFinancialHealth(total_earnings, expenses, tax_rate, blockchain_tx_fees);
    res.json(financeData);
  } catch (error) {
    console.error("Error tracking workforce financial health:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
