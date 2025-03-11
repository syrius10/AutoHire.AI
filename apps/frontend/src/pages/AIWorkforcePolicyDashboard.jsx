import { useEffect, useState } from "react";
import { fetchWorkforcePolicy } from "../services/aiWorkforcePolicyService";

// AI Workforce Policy Dashboard

export default function AIWorkforcePolicyDashboard() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchWorkforcePolicy(1, 80, 95);
      setPolicy(data);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>AI Workforce Policy Recommendations</h1>
      {policy ? <p>{policy.policyRecommendation}</p> : <p>Loading...</p>}
    </div>
  );
}
