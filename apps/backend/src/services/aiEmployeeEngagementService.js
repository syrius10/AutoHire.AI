import { spawn } from "child_process";

// Handles AI-powered employee engagement strategies

/**
 * Calls AI model to suggest engagement strategies.
 */
export const suggestEngagementStrategy = async () => {
  return new Promise((resolve, reject) => {
    const process = spawn("python3", [
      "../ai-services/aiEmployeeEngagementAI.py",
    ]);

    process.stdout.on("data", (data) => resolve(data.toString().trim()));
    process.stderr.on("data", (data) => reject(data.toString().trim()));
  });
};
