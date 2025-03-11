import axios from "axios";

// Provides AI-driven team collaboration insights

/**
 * Calls AI model to predict team productivity based on collaboration insights
 */
export const predictProductivity = async (
  communication,
  workDistribution,
  feedback,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5098/analyze-productivity",
      {
        communication,
        workDistribution,
        feedback,
      },
    );
    return response.data.productivityScore;
  } catch (error) {
    console.error("Error predicting productivity:", error);
    throw new Error("Collaboration tracking failed.");
  }
};
