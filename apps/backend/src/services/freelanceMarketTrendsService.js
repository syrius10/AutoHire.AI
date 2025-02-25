import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Fetches AI-powered freelance market insights.

export const getMarketTrends = async () => {
  return await runPythonAIModel("freelance_market_trends.pkl");
};
