import express from "express";
import { manageSelfAIWorkforce } from "../services/selfManagedAIWorkforceService.js";

// AI-driven self-managed AI workforce ecosystems.

const router = express.Router();

/**
 * @route POST /api/self-managed-ai/decision
 * @desc AI-powered self-managed AI workforce decision-making
 */
router.post("/decision", async (req, res) => {
  try {
    const { performance, resourceUtilization, efficiency, errorRate } =
      req.body;

    if (
      !performance ||
      !resourceUtilization ||
      !efficiency ||
      errorRate === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const decision = await manageSelfAIWorkforce(
      performance,
      resourceUtilization,
      efficiency,
      errorRate,
    );
    res.json({ decision });
  } catch (error) {
    console.error("Error managing AI workforce:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
