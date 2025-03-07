import axios from "axios";

// Calls AI for personalized skill self-improvement recommendations.

export const fetchSkillRecommendation = async (currentSkill, industryDemand) => {
  try {
    const response = await axios.post("/api/self-upgrading-skills/recommend", {
      currentSkill,
      industryDemand,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching skill recommendation:", error);
    return { error: "Failed to fetch skill recommendation." };
  }
};
