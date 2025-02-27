import express from "express";
import { getCareerRecommendation } from "../services/freelancerCareerService.js";

// AI-powered career planning for freelancers

const router = express.Router();

/**
 * @route POST /api/freelancer-career/recommendation
 * @desc AI-powered freelancer career guidance
 */
router.post("/recommendation", async (req, res) => {
  try {
    const { experience, completedGigs, rating } = req.body;
    if (!experience || !completedGigs || !rating) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendation = await getCareerRecommendation(experience, completedGigs, rating);
    res.json(recommendation);
  } catch (error) {
    console.error("Error in career planning:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
