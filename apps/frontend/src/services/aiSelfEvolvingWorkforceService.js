import axios from "axios";

export async function fetchEvolvingWorkforce() {
  try {
    const response = await axios.get("/api/ai-workforce/evolve");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch evolving workforce insights.");
  }
}
