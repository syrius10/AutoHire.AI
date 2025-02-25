import React, { useEffect, useState } from "react";
import { fetchSkillsGapAnalysis } from "../services/enterpriseSkillsGapService";

// Assesses skills gaps and overlaps between merging companies.

const EnterpriseSkillsGapDashboard = () => {
  const [skillsGapData, setSkillsGapData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkillsGapAnalysis()
      .then((data) => {
        setSkillsGapData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skills gap data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Enterprise Skills Gap Assessment</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(skillsGapData, null, 2)}</pre>
      )}
    </div>
  );
};

export default EnterpriseSkillsGapDashboard;
