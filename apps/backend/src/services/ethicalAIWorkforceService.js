import { execFile } from "child_process";
import path from "path";

// Provides AI-driven ethical workforce recommendations.

const AI_SCRIPT = path.resolve("apps/ai-services/ethicalAIWorkforceAI.py");

export const evaluateEthicalDecision = (action, impactScore) => {
  return new Promise((resolve, reject) => {
    execFile(
      "python",
      [AI_SCRIPT, action, impactScore],
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error executing ethicalAIWorkforceAI.py:", stderr);
          reject(error);
        } else {
          resolve(JSON.parse(stdout));
        }
      }
    );
  });
};
