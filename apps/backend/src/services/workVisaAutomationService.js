import axios from "axios";

// Fetches AI-driven work visa eligibility & compliance automation.

/**
 * Calls AI model to check work visa eligibility.
 */
export const checkVisaEligibility = async (
  experience,
  jobOffer,
  countryStrictness,
) => {
  try {
    const response = await axios.post("http://localhost:5080/work-visa-check", {
      experience,
      jobOffer,
      countryStrictness,
    });
    return response.data;
  } catch (error) {
    console.error("Error checking visa eligibility:", error);
    throw new Error("Visa eligibility check failed.");
  }
};
