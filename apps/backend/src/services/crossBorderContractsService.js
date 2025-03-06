import axios from "axios";

// Provides AI-powered cross-border job contract generation.

/**
 * Calls AI model for generating cross-border job contracts.
 */
export const generateContract = async (employeeCountry, employerCountry, jobRole) => {
  try {
    const response = await axios.post("http://localhost:5135/generate", {
      employee_country: employeeCountry,
      employer_country: employerCountry,
      job_role: jobRole,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating contract:", error);
    throw new Error("Cross-border contract generation failed.");
  }
};
