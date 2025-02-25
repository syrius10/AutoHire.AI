import { useEffect, useState } from "react";
import { fetchFreelanceMarketTrends } from "../services/freelanceMarketTrendsService";

// Shows trends & pricing shifts.

const FreelanceMarketTrendsDashboard = () => {
  const [marketTrends, setMarketTrends] = useState([]);

  useEffect(() => {
    async function loadMarketTrends() {
      const data = await fetchFreelanceMarketTrends();
      setMarketTrends(data);
    }
    loadMarketTrends();
  }, []);

  return (
    <div>
      <h2>📈 Freelance Market Trends</h2>
      <ul>
        {marketTrends.map((trend, index) => (
          <li key={index}>
            {trend.industry}: Demand {trend.demandLevel} | Avg Price: ${trend.avgPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelanceMarketTrendsDashboard;
