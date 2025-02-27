import axios from "axios";

// Retrieves AI-driven team collaboration insights

/**
 * Calls AI model for team performance and collaboration analysis.
 */
export const analyzeTeamPerformance = async (collaboration, productivity, communication) => {
  try {
    const response = await axios.post("/api/team-performance", {
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
