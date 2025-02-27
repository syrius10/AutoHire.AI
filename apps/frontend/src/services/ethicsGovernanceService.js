import axios from "axios";

// Displays AI-driven ethics governance insights.

/**
 * Fetch AI-powered ethical hiring insights.
 */
export const fetchEthicsInsights = async () => {
  try {
    const response = await axios.post("/api/ethics-governance/evaluate", {
      candidateScore: 85,
      diversityFactor: 1.2,
      hrBiasScore: 0.3,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching ethics governance insights:", error);
    return { error: "Failed to load ethics governance insights." };
  }
};
