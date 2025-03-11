import express from "express";
import { generateCoverLetter } from "../services/coverLetterService.js";

// AI-generated personalized cover letters

const router = express.Router();

/**
 * @route POST /api/cover-letter
 * @desc AI-generated personalized cover letters
 */
router.post("/", async (req, res) => {
  try {
    const { candidateName, jobTitle, companyName, skills } = req.body;
    if (!candidateName || !jobTitle || !companyName || !skills) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const coverLetter = await generateCoverLetter(
      candidateName,
      jobTitle,
      companyName,
      skills,
    );
    res.json({ coverLetter });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
