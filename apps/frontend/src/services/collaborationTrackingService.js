import axios from "axios";

// Calls AI for productivity tracking & collaboration insights

/**
 * Fetches AI-driven collaboration tracking & productivity analysis.
 */
export const fetchCollaborationTracking = async () => {
  try {
    const response = await axios.get("/api/collaboration-tracking/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching collaboration tracking data:", error);
    return { score: "N/A" };
  }
};
