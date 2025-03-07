import axios from "axios";

// Fetches AI-powered dynamic skill enhancement insights.

export const recommendLearningPath = async (currentSkill, industryDemand) => {
  try {
    const response = await axios.post("http://localhost:5137/recommend", {
      currentSkill,
      industryDemand,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching skill learning recommendations:", error);
    throw new Error("Skill recommendation failed.");
  }
};
