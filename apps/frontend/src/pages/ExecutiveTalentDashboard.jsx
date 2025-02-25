import React, { useEffect, useState } from "react";
import { fetchExecutiveTalent } from "../services/executiveTalentService";

// Displays AI-driven executive hiring insights

const ExecutiveTalentDashboard = () => {
  const [executiveTalent, setExecutiveTalent] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchExecutiveTalent();
      setExecutiveTalent(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Executive Talent Insights</h2>
      <ul>
        {executiveTalent.map((exec, index) => (
          <li key={index}>
            {exec.name} - {exec.suitabilityScore}% Fit
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExecutiveTalentDashboard;
