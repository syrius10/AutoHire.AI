import { useEffect, useState } from "react";
import { fetchNomadJobMatches } from "../services/nomadJobMatchingService";

// Displays AI-powered job matching insights for digital nomads.

const NomadJobMatchingDashboard = () => {
  const [jobMatches, setJobMatches] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchNomadJobMatches();
      setJobMatches(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌍 Digital Nomad Job Matching</h2>
      {jobMatches ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">
          {JSON.stringify(jobMatches, null, 2)}
        </pre>
      ) : (
        <p>Loading job matches...</p>
      )}
    </div>
  );
};

export default NomadJobMatchingDashboard;
