import axios from "axios";

const API_BASE = "/api/ai-work-assistant";

export const fetchTaskAssignment = async (employeeRole) => {
  try {
    const response = await axios.post(`${API_BASE}/assign-task`, { employeeRole });
    return response.data.taskAssignment;
  } catch (error) {
    console.error("Error fetching task assignment:", error);
    return "Error fetching task assignment.";
  }
};

export const fetchTaskSuggestion = async () => {
  try {
    const response = await axios.get(`${API_BASE}/task-suggestion`);
    return response.data.suggestion;
  } catch (error) {
    console.error("Error fetching task suggestion:", error);
    return "Error fetching task suggestion.";
  }
};

export const fetchMeetingReminder = async () => {
  try {
    const response = await axios.get(`${API_BASE}/meeting-reminder`);
    return response.data.reminder;
  } catch (error) {
    console.error("Error fetching meeting reminder:", error);
    return "Error fetching meeting reminder.";
  }
};
