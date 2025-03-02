import axios from "axios";

// AI-based reskilling suggestions

/**
 * Calls AI model to recommend adaptive reskilling.
 */
export const recommendReskilling = async (skillGap, learningSpeed, jobDemand) => {
  try {
    const response = await axios.post("http://localhost:5101/reskilling", {
      skillGap,
      learningSpeed,
      jobDemand,
    });
    return response.data.reskillingRecommendation;
  } catch (error) {
    console.error("Error in reskilling recommendation:", error);
    throw new Error("Reskilling recommendation failed.");
  }
};
