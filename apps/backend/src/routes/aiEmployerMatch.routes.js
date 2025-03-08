import express from "express";
import { matchCandidateWithEmployer } from "../services/aiEmployerMatchService.js";

// AI-based automated job & employer matching API routes

const router = express.Router();

/**
 * @route POST /api/ai-employer-match/match
 * @desc AI matches candidates with employers based on hiring criteria
 */
router.post("/match", async (req, res) => {
  try {
    const { candidateSkills, companyRequirements, salaryExpectation, workFlexibility } = req.body;
    if (!candidateSkills || !companyRequirements || !salaryExpectation || !workFlexibility) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const matchResult = await matchCandidateWithEmployer(candidateSkills, companyRequirements, salaryExpectation, workFlexibility);
    res.json(matchResult);
  } catch (error) {
    console.error("Error in employer-candidate matching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
