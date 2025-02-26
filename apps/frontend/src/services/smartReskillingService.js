import axios from "axios";

// ✅ smartReskillingService.js → Retrieves AI-powered reskilling insights.

export const fetchReskillingSuggestions = async () => {
  try {
    const response = await axios.get("/api/smart-reskilling");
    return response.data;
  } catch (error) {
    console.error("Error fetching reskilling suggestions:", error);
    return [];
  }
};
