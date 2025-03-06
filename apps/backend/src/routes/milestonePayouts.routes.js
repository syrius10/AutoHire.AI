import express from "express";
import { calculateMilestonePayout } from "../services/milestonePayoutsService.js";

// AI-driven blockchain-based freelancer milestone payouts.

const router = express.Router();

/**
 * @route POST /api/milestone-payouts/calculate
 * @desc AI-powered milestone-based freelancer payments.
 */
router.post("/calculate", async (req, res) => {
  try {
    const { contract_value, completion_percentage, client_satisfaction_score } = req.body;
    if (!contract_value || !completion_percentage || !client_satisfaction_score) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const payout = await calculateMilestonePayout(contract_value, completion_percentage, client_satisfaction_score);
    res.json({ milestone_payout: payout });
  } catch (error) {
    console.error("Error calculating milestone payout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
