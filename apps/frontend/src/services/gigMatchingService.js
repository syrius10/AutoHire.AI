import axios from "axios";

// Retrieves smart gig recommendations using AI

export const fetchGigRecommendations = async () => {
  try {
    const response = await axios.get("/api/gig-matching/recommendation");
    return response.data;
  } catch (error) {
    console.error("Error fetching gig recommendations:", error);
    throw new Error("Failed to fetch gig recommendations.");
  }
};
