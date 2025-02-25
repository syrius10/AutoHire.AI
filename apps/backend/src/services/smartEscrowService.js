import { runPythonAIModel } from "../utils/pythonExecutor.js";

export const processEscrow = async (inputData) => {
    return runPythonAIModel("smartEscrowAI", inputData);
};
