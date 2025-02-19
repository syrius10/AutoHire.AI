import { useEffect, useState } from "react";
import { getEngagementStats } from "../services/analyticsService";

const EngagementDashboard = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getEngagementStats().then(setStats);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Candidate Engagement Analytics</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>{stat.event_type}: {stat.count}</li>
        ))}
      </ul>
    </div>
  );
};

export default EngagementDashboard;