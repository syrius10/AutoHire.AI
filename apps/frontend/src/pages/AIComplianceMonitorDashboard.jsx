import { useEffect, useState } from "react";
import { fetchComplianceReport } from "../services/aiComplianceMonitorService";

const AIComplianceMonitorDashboard = () => {
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
      <h2 className="text-2xl font-bold">📜 AI Compliance Monitoring</h2>
      {complianceReport ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>Compliance Status:</strong> {complianceReport.status}
          </p>
          <p>
            <strong>Legal Risk Score:</strong> {complianceReport.riskScore}
          </p>
          <p>
            <strong>Regulatory Flags:</strong>{" "}
            {complianceReport.flags.join(", ")}
          </p>
        </div>
      ) : (
        <p>Loading compliance data...</p>
      )}
    </div>
  );
};

export default AIComplianceMonitorDashboard;
