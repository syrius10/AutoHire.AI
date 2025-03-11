import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const recommendProjects = async (inputData) => {
  return runPythonAIModel("projectRecommendationAI", inputData);
};
