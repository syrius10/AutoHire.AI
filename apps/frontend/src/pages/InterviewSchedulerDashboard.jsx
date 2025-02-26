import React, { useState } from "react";
import { scheduleInterview } from "../services/interviewSchedulerService";

export default function InterviewSchedulerDashboard() {
  const [candidateName, setCandidateName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const handleSchedule = async () => {
    const result = await scheduleInterview(candidateName, jobRole);
    setConfirmation(result);
  };

  return (
    <div>
      <h1>AI-Powered Interview Scheduling</h1>
      <input
        type="text"
        placeholder="Candidate Name"
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
      />
      <button onClick={handleSchedule}>Schedule Interview</button>
      {confirmation && <p>Confirmation: {confirmation.message}</p>}
    </div>
  );
}
