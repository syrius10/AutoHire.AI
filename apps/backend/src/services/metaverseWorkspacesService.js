import { runPythonAIModel } from "../utils/pythonExecutor.js";

// AI-powered virtual workspace recommendation.

export const getVirtualWorkspace = async (teamSize, workNature) => {
  return await runPythonAIModel("metaverseWorkspacesAI.py", [
    teamSize,
    workNature,
  ]);
};
