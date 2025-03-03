import express from "express";
import { assessCandidateVR } from "../services/vrJobInterviewsService.js";

// AI-powered VR job interviews & candidate assessments.

const router = express.Router();

/**
 * @route POST /api/vr-job-interviews/assess
 * @desc AI-driven VR job interview candidate assessment
 */
router.post("/assess", async (req, res) => {
  try {
    const { responses, gestures } = req.body;
    if (!responses || !gestures) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const assessment = await assessCandidateVR(responses, gestures);
    res.json({ assessment });
  } catch (error) {
    console.error("Error in VR job interview assessment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
