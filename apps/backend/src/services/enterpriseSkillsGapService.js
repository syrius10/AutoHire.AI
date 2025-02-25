import { execPythonModel } from "../utils/pythonExecutor.js";

export const analyzeSkillsGap = async (req, res) => {
  try {
    const result = await execPythonModel("enterpriseSkillsGapAI.py", req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze skills gap." });
  }
};
