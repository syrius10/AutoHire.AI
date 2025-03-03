import express from "express";
import { assignWorkTask } from "../services/aiWorkAssistantService.js";

// AI-powered virtual work assistant API.

const router = express.Router();

/**
 * @route POST /api/ai-work-assistant/assign
 * @desc AI-powered virtual work assistant for task automation
 */
router.post("/assign", async (req, res) => {
  try {
    const { employeeRole } = req.body;
    if (!employeeRole) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const taskAssignment = await assignWorkTask(employeeRole);
    res.json({ assignedTask: taskAssignment });
  } catch (error) {
    console.error("Error assigning task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
