import express from "express";
import { optimizeWorkload } from "../services/workloadBalancingService.js";

// AI-driven Workload Distribution & Burnout Prevention

const router = express.Router();

/**
 * @route POST /api/workload-balancing/optimize
 * @desc AI-driven workload distribution & burnout prevention.
 */
router.post("/optimize", async (req, res) => {
  try {
    const { employeeId, currentWorkload, efficiency, burnoutScore } = req.body;

    if (!employeeId || !currentWorkload || !efficiency || !burnoutScore) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workloadPlan = await optimizeWorkload(employeeId, currentWorkload, efficiency, burnoutScore);
    res.json(workloadPlan);
  } catch (error) {
    console.error("Error in workload optimization:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
