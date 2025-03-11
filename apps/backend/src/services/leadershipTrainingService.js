import axios from "axios";

// Calls AI model to generate personalized leadership training paths.

/**
 * Fetch AI-powered leadership training recommendation.
 */
export const getLeadershipTraining = async (
  experience,
  courses,
  performance,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5088/recommend-training",
      {
        experience,
        courses,
        performance,
      },
    );
    return response.data.trainingRecommendation;
  } catch (error) {
    console.error("Error fetching leadership training recommendation:", error);
    throw new Error("Leadership training recommendation failed.");
  }
};
