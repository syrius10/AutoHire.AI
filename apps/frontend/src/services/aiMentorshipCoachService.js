import axios from "axios";

// Calls AI for leadership coaching & mentorship.

/**
 * Fetch AI-powered mentorship & coaching growth index.
 */
export const fetchMentorshipInsights = async (sessions, feedback, engagement) => {
  try {
    const response = await axios.post("/api/mentorship-coach/analyze", {
      sessions,
      feedback,
      engagement,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching mentorship insights:", error);
    throw new Error("Mentorship insights retrieval failed.");
  }
};
