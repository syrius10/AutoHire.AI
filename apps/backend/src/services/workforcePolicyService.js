import axios from "axios";

// Provides AI-driven workforce policy recommendations.

/**
 * Calls AI model to generate workforce policy recommendations.
 */
export const generatePolicy = async (region, economicStatus) => {
  try {
    const response = await axios.post("http://localhost:5137/generate", {
      region: region,
      economic_status: economicStatus,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating workforce policy:", error);
    throw new Error("Workforce policy generation failed.");
  }
};
