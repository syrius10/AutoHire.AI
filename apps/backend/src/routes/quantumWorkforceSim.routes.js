import express from "express";
import { simulateQuantumWorkforce } from "../services/quantumWorkforceSimService.js";

// AI-powered quantum workforce simulation & scenario modeling.

const router = express.Router();

/**
 * @route POST /api/quantum-workforce-sim/simulate
 * @desc AI-driven quantum workforce simulation
 */
router.post("/simulate", async (req, res) => {
  try {
    const { workforceFactors } = req.body;
    if (!workforceFactors) {
      return res
        .status(400)
        .json({ error: "Missing workforceFactors parameter" });
    }

    const simulationResult = await simulateQuantumWorkforce(workforceFactors);
    res.json({ simulationResult });
  } catch (error) {
    console.error("Quantum Workforce Simulation Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
