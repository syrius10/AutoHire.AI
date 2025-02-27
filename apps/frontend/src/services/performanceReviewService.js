import axios from "axios";

// Fetches AI-generated performance evaluations

export const fetchPerformanceReview = async () => {
  try {
    const response = await axios.get("/api/performance-review/analyze");
    return response.data;
  } catch (error) {
    console.error("Error fetching performance review:", error);
    throw error;
  }
};
