import { useEffect, useState } from "react";
import { fetchWorkforcePolicy } from "../services/workforcePolicyService";

// AI-driven global workforce policy recommendations

export default function WorkforcePolicyDashboard() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchWorkforcePolicy();
      setPolicy(result);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Global Workforce Policy Recommendations</h1>
      {policy ? (
        <pre>{JSON.stringify(policy, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
