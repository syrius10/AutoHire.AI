import axios from "axios";

/**
 * Calls the AI service to predict burnout risk
 */
export const predictBurnoutRisk = async (data) => {
  try {
    const response = await axios.post("http://localhost:5036/predict_burnout", data);
    return response.data;
  } catch (error) {
    console.error("Error predicting burnout risk:", error);
    return { burnoutRisk: "Unknown" };
  }
};
