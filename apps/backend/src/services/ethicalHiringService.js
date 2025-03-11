import axios from "axios";

/**
 * Calls AI model to detect hiring bias and ensure fairness.
 */
export const evaluateHiringDecision = async ({
  genderBias,
  ageBias,
  ethnicBias,
  disabilityInclusionScore,
  experience,
  skillMatch,
  educationLevel,
  biasHistory,
}) => {
  try {
    const response = await axios.post("http://localhost:5084/detect_bias", {
      gender_bias: genderBias,
      age_bias: ageBias,
      ethnic_bias: ethnicBias,
      disability_inclusion_score: disabilityInclusionScore,
      experience,
      skill_match: skillMatch,
      education_level: educationLevel,
      bias_history: biasHistory,
    });

    return response.data;
  } catch (error) {
    console.error("Error detecting hiring bias:", error);
    throw new Error("Ethical hiring evaluation failed.");
  }
};
