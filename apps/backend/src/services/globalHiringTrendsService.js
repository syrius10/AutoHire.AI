import axios from "axios";

// Fetches AI-powered hiring trends & future job roles.

/**
 * Calls AI model for hiring trend analysis.
 */
export const getHiringTrends = async (
  industryGrowth,
  remoteWork,
  aiAdoption,
) => {
  try {
    const response = await axios.post("http://localhost:5120/hiring-trends", {
      industry_growth: industryGrowth,
      remote_work: remoteWork,
      ai_adoption: aiAdoption,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hiring trends:", error);
    throw new Error("AI hiring trends analysis failed.");
  }
};
