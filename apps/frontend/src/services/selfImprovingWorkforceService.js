import axios from "axios";

// Fetches AI-driven self-learning workforce predictions.

export const fetchWorkforcePrediction = async (
  experience,
  industryDemand,
  aiAdoption,
) => {
  try {
    const response = await axios.post("/api/self-improving-workforce/predict", {
      experience,
      industryDemand,
      aiAdoption,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce prediction:", error);
    return { error: "Failed to fetch workforce prediction." };
  }
};
