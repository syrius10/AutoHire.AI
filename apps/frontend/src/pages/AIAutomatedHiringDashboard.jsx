import { useEffect, useState } from "react";
import { fetchAutomatedHiring } from "../services/aiAutomatedHiringService";

// AI-driven autonomous hiring tracking

const AIAutomatedHiringDashboard = () => {
  const [hiringData, setHiringData] = useState(null);

  useEffect(() => {
    fetchAutomatedHiring().then(setHiringData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🤖 AI Automated Hiring</h2>
      {hiringData ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">
          {JSON.stringify(hiringData, null, 2)}
        </pre>
      ) : (
        <p>Loading hiring data...</p>
      )}
    </div>
  );
};

export default AIAutomatedHiringDashboard;
