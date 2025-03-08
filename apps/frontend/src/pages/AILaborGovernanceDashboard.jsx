import { useEffect, useState } from "react";
import { fetchLaborGovernanceCompliance } from "../services/aiLaborGovernanceService";

// AI-driven labor governance compliance tracking

const AILaborGovernanceDashboard = () => {
  const [laborData, setLaborData] = useState(null);

  useEffect(() => {
    fetchLaborGovernanceCompliance().then(setLaborData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ AI Labor Governance Compliance</h2>
      {laborData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Law:</strong> {laborData.law}</p>
          <p><strong>Compliance Status:</strong> {laborData.compliance_status}</p>
        </div>
      ) : (
        <p>Loading AI labor governance compliance data...</p>
      )}
    </div>
  );
};

export default AILaborGovernanceDashboard;
