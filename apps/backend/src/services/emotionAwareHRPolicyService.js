import axios from "axios";

// Calls AI model for HR policies based on emotional analysis & work conditions.

/**
 * Calls AI model for HR policies based on emotional analysis & work conditions.
 */
export const generateHRPolicy = async (stressLevel, workload, jobSatisfaction, productivity) => {
  try {
    const response = await axios.post("http://localhost:5112/predict-hr-policy", {
      stressLevel,
      workload,
      jobSatisfaction,
      productivity,
    });
    return response.data.policyRecommendation;
  } catch (error) {
    console.error("Error generating HR policy:", error);
    throw new Error("Failed to generate HR policy.");
  }
};
