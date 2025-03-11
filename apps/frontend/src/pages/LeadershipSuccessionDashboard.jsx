import React, { useEffect, useState } from "react";
import { fetchSuccessionPlan } from "../services/leadershipSuccessionService";

// Tracks AI-generated leadership succession plans

const LeadershipSuccessionDashboard = () => {
  const [successionPlan, setSuccessionPlan] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSuccessionPlan();
      setSuccessionPlan(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Leadership Succession Planning</h2>
      <ul>
        {successionPlan.map((leader) => (
          <li key={leader.id}>
            {leader.candidate} → {leader.targetRole} (Readiness:{" "}
            {leader.readiness}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadershipSuccessionDashboard;
