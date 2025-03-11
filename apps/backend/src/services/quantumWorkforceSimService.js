import { spawn } from "child_process";

// Calls AI model for quantum workforce simulation & workforce optimization.

/**
 * Calls AI-powered workforce simulation model using quantum computing.
 */
export async function simulateQuantumWorkforce(workforceFactors) {
  return new Promise((resolve, reject) => {
    const process = spawn("python3", [
      "../ai-services/quantumWorkforceSimAI.py",
      JSON.stringify(workforceFactors),
    ]);

    let output = "";
    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      console.error("Error in Quantum Workforce Simulation:", data.toString());
      reject(data.toString());
    });

    process.on("close", () => {
      resolve(JSON.parse(output));
    });
  });
}
