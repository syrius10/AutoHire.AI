import axios from "axios";

// Retrieves AI-powered workforce rights enforcement data.

export async function fetchAILaborRightsData() {
  try {
    const response = await axios.get("/api/ai-labor-rights/monitor");
    return response.data;
  } catch (error) {
    console.error("Error fetching AI labor rights data:", error);
    return { error: "Failed to load labor rights data." };
  }
}
