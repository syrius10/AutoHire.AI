import { spawn } from "child_process";
import path from "path";

// Calls AI model to calculate trust scores for freelancers & employers.

/**
 * Calls AI model to calculate freelancer & employer trust scores.
 */
export const calculateTrustScore = (
  userId,
  workHistory,
  ratings,
  disputeCount,
) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(
      process.cwd(),
      "apps",
      "ai-services",
      "trustScoringAI.py",
    );

    const pythonProcess = spawn("python3", [
      scriptPath,
      userId,
      JSON.stringify(workHistory),
      ratings,
      disputeCount,
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
