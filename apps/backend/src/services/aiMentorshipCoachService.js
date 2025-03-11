import axios from "axios";

// Fetches AI-driven coaching & mentorship insights.

/**
 * Fetch AI-powered mentorship & coaching growth index.
 */
export const getMentorshipInsights = async (sessions, feedback, engagement) => {
  try {
    const response = await axios.post(
      "http://localhost:5089/mentorship-growth",
      {
        sessions,
        feedback,
        engagement,
      },
    );
    return response.data.mentorshipGrowthIndex;
  } catch (error) {
    console.error("Error fetching mentorship insights:", error);
    throw new Error("Mentorship coaching analysis failed.");
  }
};
