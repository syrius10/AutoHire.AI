import axios from "axios";

// Fetches AI-driven team mood insights & collaboration improvement recommendations.

/**
 * Calls AI model for team sentiment analysis & collaboration optimization.
 */
export const analyzeTeamMood = async (feedbackText, engagementScore, satisfactionScore) => {
  try {
    const response = await axios.post("http://localhost:5113/analyze-team-mood", {
      feedbackText,
      engagementScore,
      satisfactionScore,
    });
    return response.data.optimizationSuggestion;
  } catch (error) {
    console.error("Error analyzing team mood:", error);
    throw new Error("Failed to analyze team mood.");
  }
};
