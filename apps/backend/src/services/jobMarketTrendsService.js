import axios from "axios";

// Calls AI model for real-time job market analytics

export const getJobMarketTrends = async () => {
  try {
    const response = await axios.get("http://localhost:5059/job-market-trends");
    return response.data;
  } catch (error) {
    console.error("Error fetching job market trends:", error);
    throw new Error("Failed to retrieve job market analytics.");
  }
};
