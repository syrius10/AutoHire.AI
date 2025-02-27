import axios from "axios";

// Fetches AI-powered freelancer career planning insights

export const fetchCareerRecommendations = async () => {
  try {
    const response = await axios.get("/api/freelancer-career/recommendation");
    return response.data;
  } catch (error) {
    console.error("Error fetching career recommendations:", error);
    throw new Error("Failed to fetch career recommendations.");
  }
};
