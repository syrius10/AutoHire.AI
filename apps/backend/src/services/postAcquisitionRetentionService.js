import { execPythonModel } from "../utils/pythonExecutor.js";

export const assessRetentionRisk = async (req, res) => {
  try {
    const result = await execPythonModel("postAcquisitionRetentionAI.py", req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to assess retention risk." });
  }
};
