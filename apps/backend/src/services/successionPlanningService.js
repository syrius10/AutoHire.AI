import axios from "axios";

/**
 * Calls AI model to predict leadership promotion readiness.
 */
export const predictPromotionReadiness = async (
  experience,
  courses,
  promotions,
  performance
) => {
  try {
    const response = await axios.post("http://localhost:5027/predict", {
      experience,
      courses,
      promotions,
      performance,
    });

    return response.data.promotionReadiness;
  } catch (error) {
    console.error("Error predicting promotion readiness:", error);
    throw new Error("Failed to retrieve promotion readiness prediction.");
  }
};
