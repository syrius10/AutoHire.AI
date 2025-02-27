import axios from "axios";

// Calls AI for work visa eligibility & compliance tracking.

/**
 * Calls backend API to check AI-powered work visa eligibility.
 */
export const checkVisaEligibility = async (params) => {
  try {
    const response = await axios.post("/api/work-visa/eligibility", params);
    return response.data;
  } catch (error) {
    console.error("Error checking visa eligibility:", error);
    throw new Error("Failed to check visa eligibility.");
  }
};
