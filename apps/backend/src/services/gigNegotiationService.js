import { spawn } from "child_process";
import path from "path";

// Calls AI model for negotiating freelancer work terms & payment agreements.

/**
 * Calls AI model to negotiate freelancer work terms & payment.
 */
export const negotiateWorkTerms = (
  freelancerId,
  employerId,
  jobDetails,
  initialOffer,
) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(
      process.cwd(),
      "apps",
      "ai-services",
      "gigNegotiationAI.py",
    );

    const pythonProcess = spawn("python3", [
      scriptPath,
      freelancerId,
      employerId,
      JSON.stringify(jobDetails),
      initialOffer,
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
