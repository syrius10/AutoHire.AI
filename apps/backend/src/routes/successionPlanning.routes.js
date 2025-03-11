import express from "express";
import { predictPromotionReadiness } from "../services/successionPlanningService.js";

const router = express.Router();

/**
 * @route POST /api/succession-planning/predict
 * @desc AI-powered succession planning & leadership readiness assessment
 */
router.post("/predict", async (req, res) => {
  try {
    const { experience, courses, promotions, performance } = req.body;

    if (
      experience === undefined ||
      courses === undefined ||
      promotions === undefined ||
      performance === undefined
    ) {
      return res.status(400).json({ error: "All input fields are required." });
    }

    const prediction = await predictPromotionReadiness(
      experience,
      courses,
      promotions,
      performance,
    );

    res.json({ promotionReadiness: prediction });
  } catch (error) {
    console.error("Error in AI succession planning:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
