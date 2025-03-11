import axios from "axios";

// Retrieves AI-driven leadership potential assessments.

/**
 * Fetch AI-powered strategic leadership potential evaluation.
 */
export const fetchLeadershipPotential = async (
  experience,
  strategyScore,
  projects,
) => {
  try {
    const response = await axios.post("/api/strategic-leadership/evaluate", {
      experience,
      strategyScore,
      projects,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching leadership potential evaluation:", error);
    throw new Error("Leadership potential data retrieval failed.");
  }
};
