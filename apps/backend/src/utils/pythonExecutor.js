import { spawn } from "child_process";
import path from "path";

// This function executes Python AI models from the /apps/ai-services/ directory and returns the output to the backend services.

/**
 * Executes a Python AI model and returns the result.
 * @param {string} modelFile - The name of the saved AI model file (.pkl).
 * @param {Object} inputData - The input data required for the AI model.
 * @returns {Promise<Object>} - The AI model's output.
 */
export const runPythonAIModel = (modelFile, inputData = {}) => {
  return new Promise((resolve, reject) => {
    const pythonScript = path.join(
      process.cwd(),
      "apps",
      "ai-services",
      "execute_model.py"
    );

    const process = spawn("python3", [pythonScript, modelFile, JSON.stringify(inputData)]);

    let result = "";
    let error = "";

    process.stdout.on("data", (data) => {
      result += data.toString();
    });

    process.stderr.on("data", (data) => {
      error += data.toString();
    });

    process.on("close", (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(result));
        } catch (err) {
          reject(`Error parsing JSON output: ${err}`);
        }
      } else {
        reject(`Python script error: ${error}`);
      }
    });
  });
};
