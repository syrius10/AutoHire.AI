import { spawn } from "child_process";

// Handles AI-driven HR automation

/**
 * Calls AI model to automate HR processes.
 */
export const automateHRProcess = async () => {
  return new Promise((resolve, reject) => {
    const process = spawn("python3", ["../ai-services/aiHRManagementAI.py"]);

    process.stdout.on("data", (data) => resolve(data.toString().trim()));
    process.stderr.on("data", (data) => reject(data.toString().trim()));
  });
};
