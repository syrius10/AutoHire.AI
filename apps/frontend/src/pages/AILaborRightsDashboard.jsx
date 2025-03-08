import { useEffect, useState } from "react";
import { fetchAILaborRightsData } from "../services/aiLaborRightsService";

// AI-based labor rights & workforce ethics tracking

const AILaborRightsDashboard = () => {
  const [laborRightsData, setLaborRightsData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAILaborRightsData();
      setLaborRightsData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛡️ AI Labor Rights & Ethics</h2>
      {laborRightsData ? (
        <pre className="mt-4 border p-4 rounded">{JSON.stringify(laborRightsData, null, 2)}</pre>
      ) : (
        <p>Loading labor rights data...</p>
      )}
    </div>
  );
};

export default AILaborRightsDashboard;
