import express from "express";
import {
  assignTokens,
  getUserBalance,
} from "../services/tokenizedWorkService.js";

// AI-driven blockchain-based work incentives & compensation.

const router = express.Router();

/**
 * @route POST /api/tokenized-work/assign
 * @desc Assigns AI-calculated token rewards based on work performance.
 */
router.post("/assign", async (req, res) => {
  try {
    const { userId, workHours, projectComplexity, skillLevel } = req.body;
    if (!userId || !workHours || !projectComplexity || !skillLevel) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const reward = await assignTokens(
      userId,
      workHours,
      projectComplexity,
      skillLevel,
    );
    res.json(reward);
  } catch (error) {
    console.error("Error assigning tokens:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/tokenized-work/balance/:userId
 * @desc Retrieves the AI-calculated token balance of a worker.
 */
router.get("/balance/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const balance = await getUserBalance(userId);
    res.json(balance);
  } catch (error) {
    console.error("Error fetching token balance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
