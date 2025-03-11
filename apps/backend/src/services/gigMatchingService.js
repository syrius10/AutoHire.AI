import axios from "axios";

// Fetches AI-driven gig recommendations

/**
 * Calls AI-powered gig matching API for freelancers.
 */
export const getGigRecommendation = async (
  skillMatch,
  marketDemand,
  rating,
) => {
  try {
    const response = await axios.post("http://localhost:5065/gig-matching", {
      skill_match: skillMatch,
      market_demand: marketDemand,
      rating,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching gig recommendation:", error);
    throw new Error("Gig recommendation failed.");
  }
};
