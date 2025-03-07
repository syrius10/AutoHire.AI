import axios from "axios";

// Calls AI model to predict workforce evolution and adaptive learning.

export const predictWorkforceEvolution = async (experience, industryDemand, aiAdoption) => {
  try {
    const response = await axios.post("http://localhost:5136/predict", {
      experience,
      industryDemand,
      aiAdoption,
    });
    return response.data;
  } catch (error) {
    console.error("Error predicting workforce evolution:", error);
    throw new Error("Workforce evolution prediction failed.");
  }
};
