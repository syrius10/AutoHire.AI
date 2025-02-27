import axios from "axios";

// Fetches AI-driven compliance checks & legal monitoring.

/**
 * Calls AI compliance model to check HR policies against labor laws.
 */
export const checkRegulatoryCompliance = async (policyText) => {
  try {
    const response = await axios.post("http://localhost:5077/check_compliance", { policy: policyText });
    return response.data;
  } catch (error) {
    console.error("Regulatory Compliance AI Error:", error);
    throw new Error("Compliance check failed.");
  }
};
