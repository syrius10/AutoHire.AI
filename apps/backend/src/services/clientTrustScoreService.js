import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const getClientTrustScore = async (data) => {
  return await runPythonAIModel("client_trust_score_ai.pkl", data);
};
