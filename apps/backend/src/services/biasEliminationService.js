import axios from "axios";

/**
 * Calls AI model to detect and eliminate hiring bias.
 */
export const detectAndEliminateBias = async (
  genderBias,
  ageBias,
  ethnicBias,
  skillMatch,
  hiringHistory
) => {
  try {
    const response = await axios.post("http://localhost:5115/detect_bias", {
      gender_bias: genderBias,
      age_bias: ageBias,
      ethnic_bias: ethnicBias,
      skill_match: skillMatch,
      hiring_history: hiringHistory,
    });

    return response.data;
  } catch (error) {
    console.error("Error detecting bias:", error);
    throw new Error("Bias detection failed.");
  }
};
