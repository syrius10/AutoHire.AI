import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const matchFreelancers = async (inputData) => {
    return runPythonAIModel("freelanceNetworkAI", inputData);
};
