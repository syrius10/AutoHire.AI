import { execSync } from "child_process";
import path from "path";

const aiScriptPath = path.join(
  process.cwd(),
  "apps/ai-services/realTimeProductivityAI.py",
);

export const getProductivityInsights = async () => {
  try {
    const command = `python3 ${aiScriptPath} get_insights`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error fetching productivity insights:", error);
    return "Error fetching productivity insights.";
  }
};

export const getProductivityTips = async () => {
  try {
    const command = `python3 ${aiScriptPath} get_tips`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error fetching productivity tips:", error);
    return "Error fetching productivity tips.";
  }
};
