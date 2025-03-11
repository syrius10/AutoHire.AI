import axios from "axios";

// Provides predictive insights into industry job demand trends

export const predictIndustryDemand = async (year, growthRate) => {
  try {
    const response = await axios.post(
      "http://localhost:5061/predict-industry-demand",
      {
        year,
        growthRate,
      },
    );
    return response.data.predictedSkillDemand;
  } catch (error) {
    console.error("Error fetching industry demand predictions:", error);
    throw new Error("Failed to predict industry job demand trends.");
  }
};
