import express from "express";
import {
  createTeam,
  assignTask,
  trackProgress
} from "../services/remoteTeamManagementService.js";

// AI-driven remote team tracking & task updates.

const router = express.Router();

/**
 * @route POST /api/remote-team/create
 * @desc Create a remote team for task tracking
 */
router.post("/create", async (req, res) => {
  try {
    const { teamName, manager } = req.body;
    if (!teamName || !manager) {
      return res.status(400).json({ error: "Team name and manager are required" });
    }

    const result = await createTeam(teamName, manager);
    res.json(result);
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/remote-team/assign-task
 * @desc Assign a task to a remote team
 */
router.post("/assign-task", async (req, res) => {
  try {
    const { teamName, task, priority } = req.body;
    if (!teamName || !task) {
      return res.status(400).json({ error: "Team name and task are required" });
    }

    const result = await assignTask(teamName, task, priority || "medium");
    res.json(result);
  } catch (error) {
    console.error("Error assigning task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/remote-team/progress
 * @desc Get task progress for a remote team
 */
router.get("/progress", async (req, res) => {
  try {
    const { teamName } = req.query;
    if (!teamName) {
      return res.status(400).json({ error: "Team name is required" });
    }

    const result = await trackProgress(teamName);
    res.json(result);
  } catch (error) {
    console.error("Error tracking progress:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
