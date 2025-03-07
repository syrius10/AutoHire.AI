import { execFile } from "child_process";
import path from "path";

// Calls AI model for workplace cognitive decision-making.

const AI_SCRIPT = path.resolve("apps/ai-services/consciousWorkAI.py");

export const getConsciousDecision = (scenario) => {
  return new Promise((resolve, reject) => {
    execFile("python", [AI_SCRIPT, scenario], (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing consciousWorkAI.py:", stderr);
        reject(error);
      } else {
        resolve(JSON.parse(stdout));
      }
    });
  });
};
