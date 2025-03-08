import axios from "axios";

export async function fetchGlobalEconomyInsights() {
  try {
    const response = await axios.get("/api/ai-economy/insights");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch global economy insights.");
  }
}
