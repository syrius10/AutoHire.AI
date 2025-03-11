import { useEffect, useState } from "react";
import { fetchJobMarketTrends } from "../services/jobMarketTrendsService";

// Displays AI-driven job market trends & hiring insights.

export default function JobMarketTrendsDashboard() {
  const [marketTrends, setMarketTrends] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      const data = await fetchJobMarketTrends();
      setMarketTrends(data);
    };
    getTrends();
  }, []);

  return (
    <div>
      <h1>Job Market Trends</h1>
      <ul>
        {marketTrends.map((trend) => (
          <li key={trend.id}>
            {trend.description} - {trend.demand_level}
          </li>
        ))}
      </ul>
    </div>
  );
}
