import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const calculateTrustScore = async (inputData) => {
    return runPythonAIModel("trustScoreAI", inputData);
};
