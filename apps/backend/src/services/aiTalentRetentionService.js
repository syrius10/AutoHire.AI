import { spawn } from "child_process";

// Handles AI-based workforce retention predictions

/**
 * Calls AI model to predict workforce retention probability.
 */
export const predictRetention = async (workload, satisfaction, careerGrowth, workLifeBalance) => {
  return new Promise((resolve, reject) => {
    const process = spawn("python3", [
      "../ai-services/aiTalentRetentionAI.py",
      workload,
      satisfaction,
      careerGrowth,
      workLifeBalance,
    ]);

    process.stdout.on("data", (data) => resolve(data.toString().trim()));
    process.stderr.on("data", (data) => reject(data.toString().trim()));
  });
};
