import { useEffect, useState } from "react";
import {
  fetchWorkforceInsights,
  fetchAttritionRisk,
  fetchDiversityInsights,
} from "../services/workforceInsightsService";

const WorkforceIntelligenceDashboard = () => {
  const [insights, setInsights] = useState({});
  const [attrition, setAttrition] = useState({});
  const [diversity, setDiversity] = useState({});

  useEffect(() => {
    fetchWorkforceInsights().then(setInsights);
    fetchAttritionRisk({ satisfaction: 0.7, workload: "medium" }).then(
      setAttrition,
    );
    fetchDiversityInsights({
      gender_ratio: { male: 50, female: 50 },
      ethnic_diversity: { white: 50, black: 30, asian: 20 },
    }).then(setDiversity);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Workforce Intelligence</h2>
      <p>📈 Hiring Trends: {insights.trend || "Loading..."}</p>
      <p>⚖️ Diversity Balance: {diversity.gender_balance || "Loading..."}</p>
      <p>📉 Attrition Risk: {attrition.attrition_risk || "Loading..."}%</p>
    </div>
  );
};

export default WorkforceIntelligenceDashboard;
