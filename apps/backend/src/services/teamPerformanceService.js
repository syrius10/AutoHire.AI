import axios from "axios";

// AI-powered team performance analytics service

/**
 * Calls AI model for team performance and collaboration analysis.
 */
export const analyzeTeamPerformance = async (
  collaboration,
  productivity,
  communication,
) => {
  try {
    const response = await axios.post("http://localhost:5076/analyze_team", {
      collaboration_score: collaboration,
      productivity_score: productivity,
      communication_score: communication,
    });

    return response.data;
  } catch (error) {
    console.error("Error analyzing team performance:", error);
    throw new Error("Team performance analysis failed.");
  }
};
