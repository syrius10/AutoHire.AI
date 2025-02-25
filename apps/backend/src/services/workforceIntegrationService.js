import { execPythonModel } from "../utils/pythonExecutor.js";

export const analyzeWorkforceIntegration = async (req, res) => {
  try {
    const result = await execPythonModel("workforceIntegrationAI.py", req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze workforce integration." });
  }
};
