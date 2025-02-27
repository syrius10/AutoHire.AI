import axios from "axios";

/**
 * Fetches AI-powered promotion readiness predictions.
 */
export const fetchPromotionReadiness = async (
  experience,
  courses,
  promotions,
  performance
) => {
  try {
    const response = await axios.post("/api/succession-planning/predict", {
      experience,
      courses,
      promotions,
      performance,
    });

    return response.data.promotionReadiness;
  } catch (error) {
    console.error("Error fetching promotion readiness:", error);
    return "Error fetching prediction";
  }
};
