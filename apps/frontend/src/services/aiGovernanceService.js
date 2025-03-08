import axios from "axios";

// Calls AI for AI governance tracking

export async function fetchAIGovernanceData() {
  try {
    const response = await axios.get("/api/ai-governance/enforce");
    return response.data;
  } catch (error) {
    console.error("Error fetching AI governance data:", error);
    return { error: "Failed to load governance data." };
  }
}
