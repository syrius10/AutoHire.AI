import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const analyzeFreelancerReputation = async (data) => {
    return await runPythonAIModel("freelancer_reputation_ai.pkl", data);
};
