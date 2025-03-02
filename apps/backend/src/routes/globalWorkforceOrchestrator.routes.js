import express from "express";
import { allocateGlobalWorkforce } from "../services/globalWorkforceOrchestratorService.js";

// AI workforce orchestration & global optimization.

const router = express.Router();

/**
 * @route POST /api/global-workforce/orchestration
 * @desc AI-powered workforce distribution & optimization
 */
router.post("/orchestration", async (req, res) => {
  try {
    const { region, demand, supply } = req.body;

    if (!region || !demand || !supply) {
      return res.status(400).json({ error: "Missing required parameters." });
    }

    const allocation = await allocateGlobalWorkforce(region, demand, supply);
    res.json({ allocatedWorkforce: allocation });
  } catch (error) {
    console.error("Error in global workforce orchestration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
