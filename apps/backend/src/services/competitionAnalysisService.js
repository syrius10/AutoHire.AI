import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Retrieves competitor pricing analysis.

export const analyzeCompetition = async (level) => {
  return await runPythonAIModel("competition_analysis.pkl", { level });
};
