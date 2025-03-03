import axios from "axios";

// Retrieves AI-driven holographic meeting analytics.

export const fetchHolographicMeetings = async () => {
  try {
    const response = await axios.get("/api/holographic-meetings/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching holographic meetings:", error);
    return null;
  }
};
