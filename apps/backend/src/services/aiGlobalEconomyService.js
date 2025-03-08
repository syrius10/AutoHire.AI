import axios from "axios";

export async function analyzeMarket() {
  try {
    const response = await axios.get("http://localhost:5145/market");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch AI-driven job market insights.");
  }
}

export async function recommendPolicy() {
  try {
    const response = await axios.get("http://localhost:5145/policy");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch AI policy recommendations.");
  }
}
