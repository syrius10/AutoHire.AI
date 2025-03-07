import express from "express";
import { getTaskAssignment, getTaskSuggestion, getMeetingReminder } from "../services/aiWorkAssistantService.js";

const router = express.Router();

/**
 * @route POST /api/ai-work-assistant/assign-task
 * @desc Assigns AI-driven tasks based on employee role
 */
router.post("/assign-task", async (req, res) => {
  try {
    const { employeeRole } = req.body;
    if (!employeeRole) {
      return res.status(400).json({ error: "Missing required field: employeeRole" });
    }

    const taskAssignment = await getTaskAssignment(employeeRole);
    res.json({ taskAssignment });
  } catch (error) {
    console.error("Error in task assignment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/ai-work-assistant/task-suggestion
 * @desc Fetches AI-generated work efficiency tips
 */
router.get("/task-suggestion", async (req, res) => {
  try {
    const suggestion = await getTaskSuggestion();
    res.json({ suggestion });
  } catch (error) {
    console.error("Error fetching task suggestion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/ai-work-assistant/meeting-reminder
 * @desc Fetches AI-driven meeting reminders
 */
router.get("/meeting-reminder", async (req, res) => {
  try {
    const reminder = await getMeetingReminder();
    res.json({ reminder });
  } catch (error) {
    console.error("Error fetching meeting reminder:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
