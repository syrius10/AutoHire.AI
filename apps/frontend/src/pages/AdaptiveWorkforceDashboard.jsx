import { useEffect, useState } from "react";
import { analyzeAdaptability } from "../services/adaptiveWorkforceService";

const AdaptiveWorkforceDashboard = () => {
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    analyzeAdaptability().then(setInsights);
  }, []);

  return (
    <div>
      <h2>🔄 Workforce Adaptability</h2>
      <pre>{JSON.stringify(insights, null, 2)}</pre>
    </div>
  );
};

export default AdaptiveWorkforceDashboard;
