import axios from "axios";

// Manages AI-based workforce distribution & optimization.

export const allocateGlobalWorkforce = async (region, demand, supply) => {
  try {
    const response = await axios.post("http://localhost:5095/orchestration", {
      region,
      demand,
      supply,
    });
    return response.data.allocatedWorkforce;
  } catch (error) {
    console.error("Error in global workforce orchestration:", error);
    throw new Error("Workforce allocation failed.");
  }
};
