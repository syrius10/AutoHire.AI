import axios from "axios";

// Provides AI-powered global work visa processing & automation.

/**
 * Calls AI model for work visa processing & automation.
 */
export const processVisa = async (applicantCountry, jobCountry, jobRole) => {
  try {
    const response = await axios.post("http://localhost:5136/process", {
      applicant_country: applicantCountry,
      job_country: jobCountry,
      job_role: jobRole,
    });
    return response.data;
  } catch (error) {
    console.error("Error processing visa:", error);
    throw new Error("Work visa processing failed.");
  }
};
