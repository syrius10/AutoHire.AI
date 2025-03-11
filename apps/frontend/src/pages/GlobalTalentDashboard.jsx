import React, { useState, useEffect } from "react";
import { fetchGlobalTalent } from "../services/globalTalentService";

// Displays AI-powered international candidate search & hiring

const GlobalTalentDashboard = () => {
  const [talentData, setTalentData] = useState([]);

  useEffect(() => {
    const loadTalentData = async () => {
      const data = await fetchGlobalTalent();
      setTalentData(data);
    };
    loadTalentData();
  }, []);

  return (
    <div>
      <h2>Global Talent Insights</h2>
      <ul>
        {talentData.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} - {candidate.suitabilityScore}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalTalentDashboard;
