import axios from "axios";

export async function evolveWorkforce() {
  try {
    const response = await axios.get("http://localhost:5144/evolve");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch AI workforce evolution insights.");
  }
}
