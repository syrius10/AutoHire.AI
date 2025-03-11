import React, { useEffect, useState } from "react";
import { fetchHighPotentialLeaders } from "../services/highPotentialLeadersService";

// Identifies emerging leadership talent

const HighPotentialLeadersDashboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchHighPotentialLeaders();
      setLeaders(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>High-Potential Leaders</h2>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.id}>
            {leader.name} - Leadership Potential: {leader.potentialScore}/100
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighPotentialLeadersDashboard;
