import express from "express";
import { assignTask } from "../services/taskDelegationService.js";

// AI-driven task delegation & workload optimization

const router = express.Router();

/**
 * @route POST /api/task-delegation/assign
 * @desc AI-powered task assignment based on workload & skills
 */
router.post("/assign", async (req, res) => {
  try {
    const { skill, workload, complexity } = req.body;
    if (!skill || !workload || !complexity) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const taskPriority = await assignTask(skill, workload, complexity);
    res.json({ taskPriority });
  } catch (error) {
    console.error("Error in task delegation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
