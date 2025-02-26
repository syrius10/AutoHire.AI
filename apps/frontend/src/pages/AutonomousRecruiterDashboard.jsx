import React, { useState, useEffect } from "react";
import { fetchCandidateScreeningResults } from "../services/autonomousRecruiterService";

export default function AutonomousRecruiterDashboard() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadCandidates = async () => {
      const data = await fetchCandidateScreeningResults();
      setCandidates(data);
    };
    loadCandidates();
  }, []);

  return (
    <div>
      <h1>AI Candidate Screening & Shortlisting</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - {candidate.matchScore}%
          </li>
        ))}
      </ul>
    </div>
  );
}
