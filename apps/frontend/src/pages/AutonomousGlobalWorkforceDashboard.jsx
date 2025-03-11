import { useEffect, useState } from "react";
import { fetchAutonomousWorkforceData } from "../services/autonomousGlobalWorkforceService";

// AI-driven workforce automation insights

const AutonomousGlobalWorkforceDashboard = () => {
  const [workforceData, setWorkforceData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAutonomousWorkforceData();
      setWorkforceData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🚀 Autonomous Global Workforce</h2>
      {workforceData ? (
        <pre className="mt-4 border p-4 rounded">
          {JSON.stringify(workforceData, null, 2)}
        </pre>
      ) : (
        <p>Loading workforce data...</p>
      )}
    </div>
  );
};

export default AutonomousGlobalWorkforceDashboard;
