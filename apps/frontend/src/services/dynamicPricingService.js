import axios from "axios";

// Fetches AI-driven price recommendations.

export const fetchPricingRecommendation = async (data) => {
  const response = await axios.post("/api/dynamic-pricing/recommend-price", data);
  return response.data;
};
