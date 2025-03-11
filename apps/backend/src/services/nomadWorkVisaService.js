import axios from "axios";

// Fetches AI-driven work visa eligibility & global mobility insights.

/**
 * Calls AI model for digital nomad work visa processing.
 */
export const processWorkVisa = async (
  visaScore,
  skillShortage,
  jobMatch,
  experienceYears,
) => {
  try {
    const response = await axios.post("http://localhost:5127/process", {
      visa_score: visaScore,
      skill_shortage: skillShortage,
      job_match: jobMatch,
      experience_years: experienceYears,
    });

    return response.data;
  } catch (error) {
    console.error("Error processing work visa:", error);
    throw new Error("Work visa processing failed.");
  }
};
