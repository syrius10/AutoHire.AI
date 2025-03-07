import { execSync } from "child_process";
import path from "path";

const aiScriptPath = path.join(process.cwd(), "apps/ai-services/aiWorkAssistantAI.py");

export const getTaskAssignment = async (employeeRole) => {
  try {
    const command = `python3 ${aiScriptPath} assign_task "${employeeRole}"`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error fetching AI task assignment:", error);
    return "Error fetching task assignment.";
  }
};

export const getTaskSuggestion = async () => {
  try {
    const command = `python3 ${aiScriptPath} get_task_suggestion`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error fetching AI task suggestion:", error);
    return "Error fetching task suggestion.";
  }
};

export const getMeetingReminder = async () => {
  try {
    const command = `python3 ${aiScriptPath} get_meeting_reminder`;
    const result = execSync(command).toString().trim();
    return result;
  } catch (error) {
    console.error("Error fetching AI meeting reminder:", error);
    return "Error fetching meeting reminder.";
  }
};
