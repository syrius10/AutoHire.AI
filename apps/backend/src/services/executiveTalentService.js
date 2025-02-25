import axios from "axios";

// Calls AI for executive hiring recommendations

export const getExecutiveTalentRecommendations = async (data) => {
  try {
    const response = await axios.post("http://localhost:5039/executive-talent", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching executive talent recommendations:", error);
    return { error: "Failed to fetch executive talent data." };
  }
};
