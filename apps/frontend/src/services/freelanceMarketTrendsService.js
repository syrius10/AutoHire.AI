import axios from "axios";

// Calls AI for market demand analysis.

export const fetchMarketTrends = async () => {
  const response = await axios.get("/api/freelance-market-trends/trends");
  return response.data;
};
