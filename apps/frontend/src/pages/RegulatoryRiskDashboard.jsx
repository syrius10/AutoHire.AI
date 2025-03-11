import { useEffect, useState } from "react";
import { assessRegulatoryRisk } from "../services/regulatoryRiskService";

// Regulatory Risk Dashboard
// This component displays the regulatory risk assessment

export default function RegulatoryRiskDashboard() {
  const [risk, setRisk] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await assessRegulatoryRisk(1, 90, 0);
      setRisk(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Regulatory Risk Assessment</h1>
      {risk ? <p>{risk.riskAssessment}</p> : <p>Loading...</p>}
    </div>
  );
}
