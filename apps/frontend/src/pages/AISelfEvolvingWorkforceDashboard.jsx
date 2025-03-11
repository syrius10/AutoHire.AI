import { useEffect, useState } from "react";
import { fetchEvolvingWorkforce } from "../services/aiSelfEvolvingWorkforceService";

const AISelfEvolvingWorkforceDashboard = () => {
  const [workforceData, setWorkforceData] = useState(null);

  useEffect(() => {
    fetchEvolvingWorkforce().then(setWorkforceData);
  }, []);

  return (
    <div>
      <h2>🛠️ AI-Powered Self-Evolving Workforce</h2>
      {workforceData ? (
        <p>
          {workforceData.role} - Optimization: {workforceData.optimization}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AISelfEvolvingWorkforceDashboard;
