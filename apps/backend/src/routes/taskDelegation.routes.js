import express from "express";
import { assignTask } from "../services/taskDelegationService.js";

const router = express.Router();

/**
 * @route POST /api/task-delegation/assign
 * @desc AI-driven task priority assignment & delegation
 */
router.post("/assign", async (req, res) => {
  try {
    const { skillLevel, workload, complexity } = req.body;

    if (
      skillLevel === undefined ||
      workload === undefined ||
      complexity === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await assignTask(skillLevel, workload, complexity);
    res.json(result);
  } catch (error) {
    console.error("Error in AI task delegation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
