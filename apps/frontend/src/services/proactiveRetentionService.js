import axios from "axios";

export const fetchRetentionRisk = async () => {
  try {
    const response = await axios.post("/api/retention/predict", {
      engagementScore: 40,
      workload: 70,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching retention risk:", error);
    return { riskLevel: "Unknown", drivers: "N/A" };
  }
};
