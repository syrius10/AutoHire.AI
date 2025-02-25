import axios from "axios";

export const fetchBurnoutRisk = async () => {
  try {
    const response = await axios.post("/api/burnout/predict", {
      workload: 50,
      stressLevels: 80,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching burnout risk:", error);
    return { riskLevel: "Unknown", workloadImpact: "N/A" };
  }
};
