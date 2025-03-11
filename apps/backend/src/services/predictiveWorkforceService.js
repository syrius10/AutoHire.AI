import axios from "axios";

// Calls AI model to predict hiring demand & workforce trends.

export const predictHiringDemand = async (
  industryGrowth,
  budget,
  companySize,
) => {
  try {
    const response = await axios.post("http://localhost:5092/hiring-demand", {
      industryGrowth,
      budget,
      companySize,
    });
    return response.data.predictedHiringNeeds;
  } catch (error) {
    console.error("Error predicting workforce demand:", error);
    throw new Error("Prediction failed.");
  }
};
