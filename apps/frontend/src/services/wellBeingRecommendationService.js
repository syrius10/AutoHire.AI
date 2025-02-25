import axios from "axios";

export const fetchWellBeingRecommendations = async () => {
  try {
    const response = await axios.post("/api/wellbeing/recommend", {
      stressFactors: ["High workload", "Long hours"],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching well-being recommendations:", error);
    return { suggestion: "Unknown", stressLevel: "N/A" };
  }
};
