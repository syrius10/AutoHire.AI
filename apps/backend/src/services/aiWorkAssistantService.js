import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Provides AI-driven virtual work assistance & productivity tracking.

export const assignWorkTask = async (employeeRole) => {
  return await runPythonAIModel("aiWorkAssistantAI.py", [employeeRole]);
};
