import { useEffect, useState } from "react";
import { checkLaborCompliance } from "../services/laborLawComplianceService";

// Labor Law Compliance Dashboard
// This component displays the labor law compliance status

export default function LaborLawComplianceDashboard() {
  const [compliance, setCompliance] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await checkLaborCompliance(1, 90, 0);
      setCompliance(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Labor Law Compliance</h1>
      {compliance ? <p>{compliance.complianceStatus}</p> : <p>Loading...</p>}
    </div>
  );
}
