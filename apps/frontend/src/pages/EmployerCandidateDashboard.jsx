import React, { useState, useEffect } from "react";
import { fetchEmployerCandidateInteractions } from "../services/employerCandidateService";

export default function EmployerCandidateDashboard() {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    const loadInteractions = async () => {
      const data = await fetchEmployerCandidateInteractions();
      setInteractions(data);
    };
    loadInteractions();
  }, []);

  return (
    <div>
      <h1>Employer-Candidate AI Communication</h1>
      <ul>
        {interactions.map((interaction) => (
          <li key={interaction.id}>
            {interaction.employer}: {interaction.message} (Candidate:{" "}
            {interaction.candidate})
          </li>
        ))}
      </ul>
    </div>
  );
}
