import express from "express";
import { getJobRotationRecommendations } from "../services/internalJobRotationService.js";

const router = express.Router();

/**
 * @route POST /api/internal-job-rotation/recommend
 * @desc AI-driven recommendations for internal job movement & career rotations.
 */
router.post("/recommend", async (req, res) => {
  try {
    const { employeeId, currentRole, skills, experience } = req.body;

    if (!employeeId || !currentRole || !skills || experience === undefined) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const recommendations = await getJobRotationRecommendations(
      employeeId,
      currentRole,
      skills,
      experience,
    );
    res.json({ recommendations });
  } catch (error) {
    console.error("Error fetching job rotation recommendations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
