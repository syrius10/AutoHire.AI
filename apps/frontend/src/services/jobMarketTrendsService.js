import axios from "axios";

// Fetches job market analytics.

export const fetchJobMarketTrends = async () => {
  try {
    const response = await axios.get("/api/job-market-trends");
    return response.data;
  } catch (error) {
    console.error("Error fetching job market trends:", error);
    return [];
  }
};
