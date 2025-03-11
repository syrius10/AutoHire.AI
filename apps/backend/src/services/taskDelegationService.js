import { spawn } from "child_process";
import path from "path";

/**
 * Calls AI model for task priority assignment & AI vs Human delegation.
 */
export const assignTask = (skillLevel, workload, complexity) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(
      process.cwd(),
      "apps",
      "ai-services",
      "taskDelegationAI.py",
    );

    const pythonProcess = spawn("python3", [
      scriptPath,
      skillLevel,
      workload,
      complexity,
    ]);

    let output = "";
    pythonProcess.stdout.on("data", (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error("Python Error:", data.toString());
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        try {
          const result = JSON.parse(output);
          resolve(result);
        } catch (error) {
          reject("Error parsing AI response");
        }
      } else {
        reject("AI model execution failed");
      }
    });
  });
};
