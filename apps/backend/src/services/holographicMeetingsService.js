import { runPythonAIModel } from "../utils/pythonExecutor.js";

// Manages AI-driven holographic meetings & team engagement.

export const optimizeMeeting = async (participants, languageDiversity) => {
  return await runPythonAIModel("holographicMeetingsAI.py", [
    participants,
    languageDiversity,
  ]);
};
