import express from "express";
import { automateWorkflow } from "../services/workflowAutomationService.js";

// AI-powered workflow & process optimization

const router = express.Router();

/**
 * @route POST /api/workflow-automation/optimize
 * @desc AI-powered workflow automation & process optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const { taskComplexity, taskUrgency, availableStaff } = req.body;

    if (!taskComplexity || !taskUrgency || !availableStaff) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const automationRecommendation = await automateWorkflow(
      taskComplexity,
      taskUrgency,
      availableStaff,
    );
    res.json({ automationRecommendation });
  } catch (error) {
    console.error("Error optimizing workflow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
