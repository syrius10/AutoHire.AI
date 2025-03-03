import axios from "axios";

/**
 * Fetches AI-powered compliance monitoring & regulatory tracking.
 */
export const fetchComplianceReport = async () => {
  try {
    const response = await axios.post("http://localhost:5001/api/ai-compliance-monitor/check", {
      hiringDecision: "Approved",
      fairnessScore: 92,
      legalStandards: ["EEOC", "GDPR", "ADA"],
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching compliance report:", error);
    throw new Error("Failed to retrieve AI compliance monitoring data.");
  }
};
