import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Calls AI for real-time pricing insights.

export const getPricingRecommendation = async (data) => {
  return await runPythonAIModel("dynamic_pricing_model.pkl", data);
};
