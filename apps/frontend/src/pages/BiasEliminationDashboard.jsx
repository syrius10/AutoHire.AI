import { useEffect, useState } from "react";
import { fetchBiasAnalysis } from "../services/biasEliminationService";

const BiasEliminationDashboard = () => {
  const [biasData, setBiasData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchBiasAnalysis();
      setBiasData(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🚀 Bias Detection & Mitigation</h2>
      {biasData ? (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p><strong>Bias Level:</strong> {biasData.biasLevel}</p>
          <p><strong>Mitigation Actions:</strong> {biasData.mitigationSteps}</p>
        </div>
      ) : (
        <p>Loading bias analysis...</p>
      )}
    </div>
  );
};

export default BiasEliminationDashboard;
