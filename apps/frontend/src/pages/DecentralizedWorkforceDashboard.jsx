import { useEffect, useState } from "react";
import { fetchWorkforceDecentralization } from "../services/decentralizedWorkforceService";

// AI-powered global workforce decentralization tracking

export default function DecentralizedWorkforceDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchWorkforceDecentralization();
      setData(result);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Global Workforce Decentralization</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
