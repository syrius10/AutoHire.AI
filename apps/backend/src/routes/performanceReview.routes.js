import express from "express";
import { generatePerformanceReview } from "../services/performanceReviewService.js";

// AI-powered performance evaluations

const router = express.Router();

/**
 * @route POST /api/performance-review/analyze
 * @desc AI-based employee performance evaluations
 */
router.post("/analyze", async (req, res) => {
  try {
    const { employeeId, reviewData } = req.body;
    if (!employeeId || !reviewData) {
      return res
        .status(400)
        .json({ error: "Employee ID and review data are required" });
    }

    const reviewResult = await generatePerformanceReview(
      employeeId,
      reviewData,
    );
    res.json(reviewResult);
  } catch (error) {
    console.error("Error generating performance review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
