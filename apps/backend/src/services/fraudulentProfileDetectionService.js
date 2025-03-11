import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const detectFraudulentProfile = async (data) => {
  return await runPythonAIModel("fraudulent_profile_detection_ai.pkl", data);
};
