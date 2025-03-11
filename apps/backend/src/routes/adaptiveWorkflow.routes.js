import express from "express";
import { optimizeWorkflow } from "../services/adaptiveWorkflowService.js";

const router = express.Router();

/**
 * @route POST /api/adaptive-workflow/optimize
 * @desc AI-powered workflow automation & optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const { taskType, urgencyLevel, workload } = req.body;

    if (!taskType || !urgencyLevel || !workload) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const optimizedWorkflow = await optimizeWorkflow(
      taskType,
      urgencyLevel,
      workload,
    );
    res.json({ optimizedWorkflow });
  } catch (error) {
    console.error("Error optimizing workflow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
