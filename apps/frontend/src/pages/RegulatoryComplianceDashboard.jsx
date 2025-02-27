import { useEffect, useState } from "react";
import { fetchComplianceReport } from "../services/regulatoryComplianceService";

// Real-time AI-based labor law & compliance monitoring.

const RegulatoryComplianceDashboard = () => {
  const [complianceReport, setComplianceReport] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchComplianceReport();
      setComplianceReport(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ AI-Powered Compliance Monitoring</h2>
      {complianceReport ? (
        <pre className="mt-4 border p-4 rounded">{JSON.stringify(complianceReport, null, 2)}</pre>
      ) : (
        <p>Loading compliance insights...</p>
      )}
    </div>
  );
};

export default RegulatoryComplianceDashboard;
