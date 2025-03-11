import { useEffect, useState } from "react";
import { fetchCompetitionAnalysis } from "../services/competitionAnalysisService";

// Compares freelancer rates vs. competitors.

const CompetitionAnalysisDashboard = () => {
  const [competitorData, setCompetitorData] = useState([]);

  useEffect(() => {
    async function loadCompetitionData() {
      const data = await fetchCompetitionAnalysis();
      setCompetitorData(data);
    }
    loadCompetitionData();
  }, []);

  return (
    <div>
      <h2>🏆 Competition Analysis</h2>
      <ul>
        {competitorData.map((competitor) => (
          <li key={competitor.id}>
            {competitor.companyName}: Avg Rate: ${competitor.avgRate} | Market
            Share: {competitor.marketShare}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitionAnalysisDashboard;
