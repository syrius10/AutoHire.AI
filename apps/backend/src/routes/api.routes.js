import express from "express";
import { authenticateAPIKey } from "../middleware/authMiddleware";
import { getJobMatches, enrichCandidateProfile } from "../services/apiService";

const router = express.Router();

// ✅ Get AI-driven job matches for a candidate
router.get("/job-matches/:candidateId", authenticateAPIKey, async (req, res) => {
    const { candidateId } = req.params;
    const matches = await getJobMatches(candidateId);
    res.json(matches);
});

// ✅ Enrich candidate profile with AI
router.post("/profile/enrich", authenticateAPIKey, async (req, res) => {
    const { candidateData } = req.body;
    const enrichedProfile = await enrichCandidateProfile(candidateData);
    res.json(enrichedProfile);
});

export default router;
