import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Fetches AI-powered VR-based interview insights.

export const assessCandidateVR = async (responses, gestures) => {
  return await runPythonAIModel("vrJobInterviewsAI.py", [responses, gestures]);
};
