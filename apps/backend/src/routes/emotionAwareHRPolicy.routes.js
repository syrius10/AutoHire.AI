import express from "express";
import { generateHRPolicy } from "../services/emotionAwareHRPolicyService.js";

// AI-powered HR policy recommendations based on employee emotions & work conditions.

const router = express.Router();

/**
 * @route POST /api/emotion-aware-hr/policy
 * @desc AI-powered emotion-aware HR policy recommendations & adaptive scheduling
 */
router.post("/policy", async (req, res) => {
  try {
    const { stressLevel, workload, jobSatisfaction, productivity } = req.body;

    if (
      stressLevel === undefined ||
      workload === undefined ||
      jobSatisfaction === undefined ||
      productivity === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hrPolicy = await generateHRPolicy(
      stressLevel,
      workload,
      jobSatisfaction,
      productivity,
    );
    res.json({ recommendedPolicy: hrPolicy });
  } catch (error) {
    console.error("Error in HR policy recommendation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
