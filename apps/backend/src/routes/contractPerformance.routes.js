import express from "express";
import { monitorContractPerformance } from "../services/contractPerformanceService.js";

// AI-based contract execution monitoring.

const router = express.Router();

/**
 * @route POST /api/contract-performance/monitor
 * @desc AI-based contract execution tracking & performance monitoring
 */
router.post("/monitor", async (req, res) => {
  try {
    const { contractId } = req.body;

    if (!contractId) {
      return res.status(400).json({ error: "Contract ID is required" });
    }

    const performanceData = await monitorContractPerformance(contractId);
    res.json(performanceData);
  } catch (error) {
    console.error("Error monitoring contract performance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
