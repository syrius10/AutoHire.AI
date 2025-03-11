import axios from "axios";

export const fetchFreelanceMatches = async () => {
  try {
    const response = await axios.get("/api/freelance-network/match");
    return response.data;
  } catch (error) {
    console.error("Error fetching freelance matches:", error);
    return [];
  }
};
