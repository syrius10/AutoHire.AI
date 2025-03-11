import axios from "axios";

// Fetches AI-driven freelancer-job matches

export const fetchFreelanceMatches = async () => {
  try {
    const response = await axios.get("/api/freelance-talent-matching");
    return response.data;
  } catch (error) {
    console.error("Error fetching freelance talent matches:", error);
    return [];
  }
};
