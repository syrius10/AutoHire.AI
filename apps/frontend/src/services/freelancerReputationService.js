import axios from "axios";

// Fetches AI-generated freelancer reputation scores.

export const fetchFreelancerReputation = async () => {
  try {
    const response = await axios.get("/api/freelancer-reputation");
    return response.data;
  } catch (error) {
    console.error("Error fetching freelancer reputation:", error);
    return null;
  }
};
