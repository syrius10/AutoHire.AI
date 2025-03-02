import axios from "axios";

// Identifies high-potential leadership talent using AI analytics.

/**
 * Fetch AI-powered leadership potential evaluation.
 */
export const evaluateLeadershipPotential = async (experience, strategyScore, projects) => {
  try {
    const response = await axios.post("http://localhost:5090/evaluate-leadership", {
      experience,
      strategyScore,
      projects,
    });
    return response.data.leadershipPotential;
  } catch (error) {
    console.error("Error evaluating leadership potential:", error);
    throw new Error("Leadership potential analysis failed.");
  }
};
