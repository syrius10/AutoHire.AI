import express from "express";
import { getConsciousDecision } from "../services/consciousWorkService.js";

// AI-powered workplace AI with human-like cognitive decision-making.

const router = express.Router();

/**
 * @route POST /api/conscious-work/decision
 * @desc AI-powered workplace cognitive decision-making
 */
router.post("/decision", async (req, res) => {
  try {
    const { scenario } = req.body;
    if (!scenario) {
      return res.status(400).json({ error: "Scenario is required" });
    }

    const decision = await getConsciousDecision(scenario);
    res.json(decision);
  } catch (error) {
    console.error("Error in conscious decision-making:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
