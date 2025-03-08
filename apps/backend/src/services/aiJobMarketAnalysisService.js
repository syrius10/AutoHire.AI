import { callAIModel } from "../utils/aiServiceCaller.js"; // AI model integration

// Fetches AI-driven global hiring trends

export const analyzeJobMarket = async () => {
  return await callAIModel("aiJobMarketAnalysisAI", {});
};
