import axios from "axios";

// Calls AI model for international hiring & relocation insights.

/**
 * Calls AI model to get international hiring recommendations.
 */
export const getHiringRecommendations = async (skillsDemand, talentAvailability, relocationFeasibility) => {
  try {
    const response = await axios.post("http://localhost:5079/global-hiring", {
      skillsDemand,
      talentAvailability,
      relocationFeasibility,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hiring recommendations:", error);
    throw new Error("AI hiring recommendations failed.");
  }
};
