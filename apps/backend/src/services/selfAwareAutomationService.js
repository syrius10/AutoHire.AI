import { execFile } from "child_process";
import path from "path";

// Manages AI-powered self-aware workforce automation.

const AI_SCRIPT = path.resolve("apps/ai-services/selfAwareAutomationAI.py");

export const analyzeAutomationStatus = (
  systemLoad,
  errorRate,
  taskCompletion,
) => {
  return new Promise((resolve, reject) => {
    execFile(
      "python",
      [AI_SCRIPT, systemLoad, errorRate, taskCompletion],
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error executing selfAwareAutomationAI.py:", stderr);
          reject(error);
        } else {
          resolve(JSON.parse(stdout));
        }
      },
    );
  });
};
