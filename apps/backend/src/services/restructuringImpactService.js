import { execPythonModel } from "../utils/pythonExecutor.js";

export const predictRestructuringImpact = async (req, res) => {
  try {
    const result = await execPythonModel("restructuringImpactAI.py", req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to predict restructuring impact." });
  }
};
