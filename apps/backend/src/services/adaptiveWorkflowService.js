import { execSync } from "child_process";
import path from "path";

const aiScriptPath = path.join(
  process.cwd(),
  "apps/ai-services/adaptiveWorkflowAI.py",
);

export const optimizeWorkflow = async (taskType, urgencyLevel, workload) => {
  try {
    const command = `python3 ${aiScriptPath} optimize_workflow "${taskType}" ${urgencyLevel} ${workload}`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error optimizing workflow:", error);
    return "Error optimizing workflow.";
  }
};
