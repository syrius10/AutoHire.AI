import { useState } from "react";
import {
  scheduleMeeting,
  generateFollowUpTasks,
} from "../services/meetingAutomationService";

// AI-driven meeting scheduling & follow-ups

const MeetingAutomationDashboard = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    participants: "",
    agenda: "",
    dateTime: "",
  });
  const [meetingResponse, setMeetingResponse] = useState(null);
  const [meetingId, setMeetingId] = useState("");
  const [followUpResponse, setFollowUpResponse] = useState(null);

  const handleScheduleMeeting = async () => {
    const response = await scheduleMeeting(
      meetingDetails.participants,
      meetingDetails.agenda,
      meetingDetails.dateTime,
    );
    setMeetingResponse(response);
    setMeetingId(response.meetingId || ""); // Save meeting ID for follow-ups
  };

  const handleGenerateFollowUps = async () => {
    if (!meetingId) return;
    const response = await generateFollowUpTasks(meetingId);
    setFollowUpResponse(response);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📅 AI-Driven Meeting Scheduler</h2>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Participants (comma-separated)"
          onChange={(e) =>
            setMeetingDetails({
              ...meetingDetails,
              participants: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Agenda"
          onChange={(e) =>
            setMeetingDetails({ ...meetingDetails, agenda: e.target.value })
          }
        />
        <input
          type="datetime-local"
          onChange={(e) =>
            setMeetingDetails({ ...meetingDetails, dateTime: e.target.value })
          }
        />
        <button
          onClick={handleScheduleMeeting}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Schedule Meeting
        </button>
      </div>

      {meetingResponse && (
        <pre className="mt-4 border p-4 rounded">
          {JSON.stringify(meetingResponse, null, 2)}
        </pre>
      )}

      {meetingId && (
        <div className="mt-4">
          <button
            onClick={handleGenerateFollowUps}
            className="bg-green-500 text-white p-2 rounded"
          >
            Generate Follow-Ups
          </button>
        </div>
      )}

      {followUpResponse && (
        <pre className="mt-4 border p-4 rounded">
          {JSON.stringify(followUpResponse, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default MeetingAutomationDashboard;
