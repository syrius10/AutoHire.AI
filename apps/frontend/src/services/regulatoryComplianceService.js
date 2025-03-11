import axios from "axios";

// Retrieves AI-powered legal compliance reports.

/**
 * Fetch AI-powered regulatory compliance reports.
 */
export const fetchComplianceReport = async () => {
  try {
    const response = await axios.post("/api/regulatory-compliance/check", {
      policy: "General HR Policy",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching compliance report:", error);
    return { error: "Failed to load compliance insights." };
  }
};
