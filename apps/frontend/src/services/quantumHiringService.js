import axios from "axios";

export async function fetchQuantumHiringInsights() {
  try {
    const response = await axios.get("/api/quantum-ai/hiring");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quantum hiring insights.");
  }
}
