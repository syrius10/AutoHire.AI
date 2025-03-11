import { useEffect, useState } from "react";
import {
  fetchTaskAssignment,
  fetchTaskSuggestion,
  fetchMeetingReminder,
} from "../services/aiWorkAssistantService";

export default function AIWorkAssistantDashboard() {
  const [taskAssignment, setTaskAssignment] = useState("");
  const [taskSuggestion, setTaskSuggestion] = useState("");
  const [meetingReminder, setMeetingReminder] = useState("");

  useEffect(() => {
    async function loadAIInsights() {
      const task = await fetchTaskAssignment("developer");
      const suggestion = await fetchTaskSuggestion();
      const reminder = await fetchMeetingReminder();

      setTaskAssignment(task);
      setTaskSuggestion(suggestion);
      setMeetingReminder(reminder);
    }
    loadAIInsights();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI Work Assistant</h2>
      <div className="mt-4 border p-4 rounded bg-gray-100">
        <p>
          <strong>Task Assignment:</strong> {taskAssignment}
        </p>
        <p>
          <strong>Task Suggestion:</strong> {taskSuggestion}
        </p>
        <p>
          <strong>Meeting Reminder:</strong> {meetingReminder}
        </p>
      </div>
    </div>
  );
}
