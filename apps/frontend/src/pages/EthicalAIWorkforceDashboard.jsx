import { useState } from "react";
import { fetchEthicalEvaluation } from "../services/ethicalAIWorkforceService";

// AI-powered ethically responsible workforce automation.

const EthicalAIWorkforceDashboard = () => {
  const [assessment, setAssessment] = useState(null);
  const [inputData, setInputData] = useState({
    action: "",
    impactScore: "",
  });

  const handleEvaluate = async () => {
    if (!inputData.action || !inputData.impactScore) return;
    const result = await fetchEthicalEvaluation(inputData);
    setAssessment(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ Ethical AI Workforce Evaluation</h2>
      <input
        type="text"
        className="border p-2 rounded w-full mt-2"
        placeholder="Describe the AI action..."
        value={inputData.action}
        onChange={(e) => setInputData({ ...inputData, action: e.target.value })}
      />
      <input
        type="number"
        className="border p-2 rounded w-full mt-2"
        placeholder="Impact Score (0-100)"
        value={inputData.impactScore}
        onChange={(e) =>
          setInputData({ ...inputData, impactScore: e.target.value })
        }
      />
      <button
        onClick={handleEvaluate}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Evaluate AI Ethics
      </button>
      {assessment && (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Ethical Assessment:</strong> {assessment}
          </p>
        </div>
      )}
    </div>
  );
};

export default EthicalAIWorkforceDashboard;
