import axios from "axios";

// Retrieves AI-driven Leadership Decision Recommendations

/**
 * Fetches AI-powered leadership decision-making insights.
 */
export const fetchLeadershipDecision = async (leaderId) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/api/leadership-decision/assess",
      {
        leaderId,
        experience: 10, // Example static data
        strategicThinking: 8,
        teamLeadership: 9,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching leadership decision data:", error);
    return { error: "Failed to fetch leadership decision insights." };
  }
};
