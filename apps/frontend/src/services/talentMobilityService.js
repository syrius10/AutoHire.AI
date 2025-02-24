import axios from "axios";

// Retrieves AI-powered talent mobility insights.

export const getTalentMobilityInsights = async () => {
  try {
    const response = await axios.get("/api/talent-mobility");
    return response.data;
  } catch (error) {
    console.error("Error fetching talent mobility insights:", error);
    return { recommendations: [] };
  }
};
